import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import { storageService } from "../../../services/storage.service";

import { SpellButton } from "./index";

// Mock useNavigate and useLocalStorage hooks
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
jest.mock("usehooks-ts", () => ({
  useLocalStorage: jest.fn(),
}));

// Mock storageService
jest.mock("../../../services/storage.service", () => ({
  storageService: {
    addToLocalStorage: jest.fn(),
  },
}));

describe("SpellButton", () => {
  const navigateMock = jest.fn();
  const setSpellsMock = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    (useLocalStorage as jest.Mock).mockReturnValue([[], setSpellsMock]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders button with text", () => {
    const text = "Read More";
    const route = "/spell/123";
    const data = {
      url: "http://www.example.com/spell/123",
      index: "123",
      name: "Test Spell",
    };

    const { getByText } = render(
      <SpellButton text={text} route={route} data={data} />
    );

    expect(getByText(text)).toBeInTheDocument();
  });

  it("calls navigate with correct path when clicked", () => {
    const text = "Read More";
    const route = "/spell/123";
    const data = {
      url: "http://www.example.com/spell/123",
      index: "123",
      name: "Test Spell",
    };

    const { getByText } = render(
      <SpellButton text={text} route={route} data={data} />
    );

    fireEvent.click(getByText(text));

    expect(navigateMock).toHaveBeenCalledWith(route);
  });

  it("adds spell to local storage and calls navigate with correct path when clicked on Favourites button", () => {
    const text = "Favourites";
    const route = "/favourites";
    const data = {
      url: "http://www.example.com/spell/123",
      index: "123",
      name: "Test Spell",
    };

    const items = [{ url: data.url, index: data.index, name: data.name }];
    (storageService.addToLocalStorage as jest.Mock).mockReturnValueOnce(items);

    const { getByText } = render(
      <SpellButton text={text} route={route} data={data} />
    );

    fireEvent.click(getByText(text));

    expect(storageService.addToLocalStorage).toHaveBeenCalledWith(data);
    expect(setSpellsMock).toHaveBeenCalledWith(items);
    expect(navigateMock).toHaveBeenCalledWith(route);
  });
});

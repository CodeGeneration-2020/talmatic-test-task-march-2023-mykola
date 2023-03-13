import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "./index";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../consts/app-keys.const";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Header component", () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should navigate to root when clicking on logo", () => {
    const { getByText } = render(<Header />);
    const logo = getByText("Spells");
    fireEvent.click(logo);
    expect(navigateMock).toHaveBeenCalledWith(ROUTER_KEYS.ROOT);
  });

  it("should navigate to favourites when clicking on link", () => {
    const { getByText } = render(<Header />);
    const link = getByText("Favourite");
    fireEvent.click(link);
    expect(navigateMock).toHaveBeenCalledWith(ROUTER_KEYS.FAVOURITES);
  });
});

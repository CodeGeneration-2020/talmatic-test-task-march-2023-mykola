import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "./index";

describe("Loader component", () => {
  it("renders a loading message", () => {
    const { getByText } = render(<Loader />);

    expect(getByText("Loading...")).toBeInTheDocument();
  });
});

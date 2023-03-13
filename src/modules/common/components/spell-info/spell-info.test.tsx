import React from "react";
import { render } from "@testing-library/react";
import { SpellInfo } from "./index";
import { ISpellInfoBlock } from "../../types/spell.types";

describe("SpellInfo component", () => {
  const spellInfoBlock: ISpellInfoBlock = {
    title: "Test Spell Title",
    text: "Test Spell Description",
  };

  it("renders the title and text props", () => {
    const { getByText } = render(<SpellInfo {...spellInfoBlock} />);

    expect(getByText(spellInfoBlock.title)).toBeInTheDocument();
    expect(getByText(spellInfoBlock.text as string)).toBeInTheDocument();
  });
});

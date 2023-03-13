import React from "react";

import { ISpellInfoBlock } from "../../types/spell.types";

export const SpellInfo = ({ title, text }: ISpellInfoBlock) => {
  return (
    <>
      <h5>{title}</h5>
      <p>{text}</p>
    </>
  );
};

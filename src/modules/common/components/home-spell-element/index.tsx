import React from "react";

import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { storageService } from "../../../services/storage.service";

import { HomeSpellBtn, HomeSpellEl, HomeSpellFlex } from "./index.styled";

import { ISpell } from "../../types/spell.types";

import { LOCAL_STORAGE_KEYS, ROUTER_KEYS } from "../../consts/app-keys.const";

export const HomeSpellElement = ({ spell }: { spell: ISpell }) => {
  const navigate = useNavigate();
  const [spells, setSpells] = useLocalStorage(LOCAL_STORAGE_KEYS.SPELLS, []);
  const handleClick = () => {
    navigate(`${ROUTER_KEYS.SPELL}/${spell.index}`);
  };

  const addSpellToStorage = () => {
    const items = storageService.addToLocalStorage(spell);
    setSpells(items);
  };

  const removeSpellFromStorage = () => {
    const removedSpells = storageService.removeFromLocalStorage(spell.index);
    setSpells(removedSpells);
  };

  return (
    <HomeSpellEl>
      <HomeSpellFlex>
        <h6>{spell.name}</h6>
        {spells.find((item: ISpell) => item.index === spell.index) ? (
          <AiFillStar onClick={removeSpellFromStorage} />
        ) : (
          <AiOutlineStar onClick={addSpellToStorage} />
        )}
      </HomeSpellFlex>
      <HomeSpellBtn onClick={handleClick}>Read More</HomeSpellBtn>
    </HomeSpellEl>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import { storageService } from "../../../services/storage.service";

import { LOCAL_STORAGE_KEYS, ROUTER_KEYS } from "../../consts/app-keys.const";

import { ISpellBtn } from "../../types/spell.types";

export const SpellButton = ({ text, route, data }: ISpellBtn) => {
  const [, setSpells] = useLocalStorage(LOCAL_STORAGE_KEYS.SPELLS, []);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    if (route === ROUTER_KEYS.FAVOURITES) {
      const items = storageService.addToLocalStorage({
        url: data!.url,
        index: data!.index,
        name: data!.name,
      });
      setSpells(items);
    }

    navigate(path);
  };

  return <div onClick={() => handleClick(route)}>{text}</div>;
};

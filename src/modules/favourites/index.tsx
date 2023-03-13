import React from "react";

import { useLocalStorage } from "usehooks-ts";

import { Header } from "../common/components/header";
import { HomeSpellElement } from "../common/components/home-spell-element";

import {
  HomeContainer,
  HomeGridWrapper,
  HomeTitle,
} from "../home/index.styled";

import { ISpell } from "../common/types/spell.types";

import { LOCAL_STORAGE_KEYS } from "../common/consts/app-keys.const";

export const Favourites = () => {
  const [spells] = useLocalStorage(LOCAL_STORAGE_KEYS.SPELLS, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeTitle>Your Favourite Spells</HomeTitle>

        {spells.length > 0 ? (
          <HomeGridWrapper>
            {spells.map((item: ISpell, index: number) => (
              <HomeSpellElement key={`${index}${item.name}`} spell={item} />
            ))}
          </HomeGridWrapper>
        ) : (
          <p style={{ textAlign: "center" }}>
            You don't have any favourite spells
          </p>
        )}
      </HomeContainer>
    </>
  );
};

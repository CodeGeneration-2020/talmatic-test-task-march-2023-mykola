import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Loader } from "../common/components/loader";
import { ISpell } from "../common/types/spell.types";
import { Header } from "../common/components/header";
import { HomeSpellElement } from "../common/components/home-spell-element";

import { spellsService } from "../services/spell.service";

import {
  HomeContainer,
  HomeGridWrapper,
  HomeLoadMore,
  HomeTitle,
} from "./index.styled";

import { QUERY_KEYS, SPELLS_PER_PAGE } from "../common/consts/app-keys.const";

export const Home = () => {
  const { data, isLoading } = useQuery([QUERY_KEYS.SPELLS], () =>
    spellsService.getAllSpells()
  );

  const [spellsToShow, setSpellsToShow] = useState<ISpell[]>([]);
  const [next, setNext] = useState(SPELLS_PER_PAGE);

  const loopWithSlice = (start: number, end: number) => {
    const slicedPosts = data?.results.slice(start, end);
    if (slicedPosts)
      setSpellsToShow(Array.from(new Set([...spellsToShow, ...slicedPosts])));
  };

  useEffect(() => {
    loopWithSlice(0, SPELLS_PER_PAGE);
  }, [data]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + SPELLS_PER_PAGE);
    setNext(next + SPELLS_PER_PAGE);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeTitle>Check Out All Spells</HomeTitle>
        <HomeGridWrapper>
          {spellsToShow.map((item, index) => (
            <HomeSpellElement key={`${index}${item.name}`} spell={item} />
          ))}
        </HomeGridWrapper>
        {next <= spellsToShow?.length && (
          <div style={{ textAlign: "center" }}>
            <HomeLoadMore onClick={handleShowMorePosts}>Load more</HomeLoadMore>
          </div>
        )}
      </HomeContainer>
    </>
  );
};

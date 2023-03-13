import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { Header } from "../common/components/header";
import { Loader } from "../common/components/loader";
import { SpellInfo } from "../common/components/spell-info";
import { SpellButton } from "../common/components/spell-button";

import { spellsService } from "../services/spell.service";

import {
  SpellBtnContainer,
  SpellClasses,
  SpellClassesFlex,
  SpellClassesLink,
  SpellContainer,
  SpellDescription,
  SpellHeading,
  SpellHigherLevel,
  SpellMaterial,
} from "./index.styled";

import { QUERY_KEYS, ROUTER_KEYS } from "../common/consts/app-keys.const";

export const Spell = () => {
  const { index } = useParams<{ index: string }>();

  const { data, isLoading } = useQuery([QUERY_KEYS.SPELLS, index], () =>
    spellsService.getSpecificSpell(index!)
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <SpellContainer>
        <div>
          <SpellHeading>{data?.name}</SpellHeading>
          {data?.desc && (
            <SpellDescription>
              <SpellInfo title={"Description:"} text={data?.desc} />
            </SpellDescription>
          )}
          {data?.higher_level && data?.higher_level.length > 0 && (
            <SpellHigherLevel>
              <SpellInfo title={"Higher Level:"} text={data?.higher_level} />
            </SpellHigherLevel>
          )}
          {data?.material && (
            <SpellMaterial>
              <SpellInfo title={"Material:"} text={data?.material} />
            </SpellMaterial>
          )}
          {data?.classes && data?.classes.length > 0 && (
            <SpellClasses>
              <h5>Classes:</h5>
              <SpellClassesFlex>
                {data?.classes.map((item_class) => (
                  <SpellClassesLink key={item_class.index}>
                    {item_class.name}
                  </SpellClassesLink>
                ))}
              </SpellClassesFlex>
            </SpellClasses>
          )}
          <SpellBtnContainer>
            <SpellButton
              text={"Back To Home"}
              route={ROUTER_KEYS.ROOT}
              data={data!}
            />
            <SpellButton
              text={"Add To Favourite"}
              route={ROUTER_KEYS.FAVOURITES}
              data={data!}
            />
          </SpellBtnContainer>
        </div>
      </SpellContainer>
    </>
  );
};

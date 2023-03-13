import React from "react";

import { useNavigate } from "react-router-dom";

import {
  HeaderNavContainer,
  HeaderNavLink,
  HeaderNavLogo,
  HeaderNavWrapper,
} from "./index.styled";

import { ROUTER_KEYS } from "../../consts/app-keys.const";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderNavWrapper>
      <HeaderNavContainer>
        <HeaderNavLogo onClick={() => navigate(ROUTER_KEYS.ROOT)}>
          Spells
        </HeaderNavLogo>
        <HeaderNavLink onClick={() => navigate(ROUTER_KEYS.FAVOURITES)}>
          Favourite
        </HeaderNavLink>
      </HeaderNavContainer>
    </HeaderNavWrapper>
  );
};

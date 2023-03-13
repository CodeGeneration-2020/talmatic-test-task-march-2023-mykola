import React from "react";

import { ROUTER_KEYS } from "../common/consts/app-keys.const";

import { Home } from "../home";
import { Favourites } from "../favourites";
import { Spell } from "../spell";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

export const publicRoutes: RouteType[] = [
  { path: ROUTER_KEYS.ROOT, element: <Home /> },
  { path: ROUTER_KEYS.FAVOURITES, element: <Favourites /> },
  { path: `${ROUTER_KEYS.SPELL}/:index`, element: <Spell /> },
];

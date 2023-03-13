import { HttpService } from "./http.service";
import { HttpServiceFactory } from "./index";

import { API_ROUTE_KEYS } from "../common/consts/app-keys.const";

import { ISpellResponse, ISpellsResponse } from "../common/types/spell.types";

export class SpellsService {
  constructor(private httpService: HttpService) {}
  public getAllSpells() {
    return this.httpService.get<ISpellsResponse>(API_ROUTE_KEYS.ALL_SPELLS);
  }

  public getSpecificSpell(index: string) {
    return this.httpService.get<ISpellResponse>(
      `${API_ROUTE_KEYS.ALL_SPELLS}/${index}`
    );
  }
}

const factory = new HttpServiceFactory();
export const spellsService = new SpellsService(factory.createHttpService());

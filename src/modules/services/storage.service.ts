import { LOCAL_STORAGE_KEYS } from "../common/consts/app-keys.const";

import { ISpell } from "../common/types/spell.types";
export class StorageService {
  public addToLocalStorage(spell: ISpell) {
    const items = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.SPELLS) ?? "[]"
    );

    if (items.some((item: ISpell) => item.index === spell.index)) {
      return items;
    }

    items.push(spell);

    return items;
  }

  public removeFromLocalStorage = (index: string) => {
    const items = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.SPELLS) ?? "[]"
    );
    return items.filter((item: ISpell) => item.index !== index);
  };
}

export const storageService = new StorageService();

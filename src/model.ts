export interface Campaign {
  name: string;
  players: Player[]
}

export type PdkSkill = 'action' | 'skill' | undefined;
export type BonusAction = 'reserve' | 'used' | undefined;

export interface BonusActions {
  first: BonusAction;
  second: BonusAction;
  third: BonusAction;
  fourth: BonusAction;
  fifth: BonusAction;
  sixth: BonusAction;
  seventh: BonusAction;
}

export interface Player {
  playerName: string;
  characterName: string;
  pdk: PdkSkill[];
  campaignSkills: (number | undefined)[];
  bonusActions: BonusActions;
  savedInventory: string[];
  achievments: string[];
}

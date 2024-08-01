import { create } from 'zustand';
import { BonusAction, Campaign, PdkSkill, Player } from '../model';

interface CampaignsState {
  selectedCampaign: Campaign | undefined;
  setSelectedCampaign: (name: string | undefined) => void;
  addPlayer: (name: string, char: string) => void;
  setPdk: (charName: string, index: number, skill: PdkSkill) => void;
  setCampPerk: (charName: string, index: number, isSet: boolean) => void;
  setBonusAction: (charName: string, actionName: string, isSet: BonusAction) => void;
  addInv: (charName: string, inv: string) => void;
  removeInv: (charName: string, item: string) => void;
  addAchievment: (charName: string, achievment: string) => void;
  removeAchievment: (charName: string, achievment: string) => void;
}

const extractCampaigns = (): Campaign[] => {
  const ls = localStorage.getItem('campaigns');
  if (ls) {
    const campaigns: Campaign[] = JSON.parse(ls);
    return campaigns;
  }
  return [];
};

const updatePlayers = (campaign: string, players: Player[]) => {
  const ls = localStorage.getItem('campaigns');
  if (ls) {
    const campaigns: Campaign[] = JSON.parse(ls);
    const currentCamp = campaigns.find(c => c.name === campaign);
    if (currentCamp) {
      currentCamp.players = players;
    }
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }
};

const createNewPlayer = (playerName: string, characterName: string): Player => {
  return {
    playerName: playerName,
    characterName: characterName,
    pdk: Array.from({ length: 20 }),
    campaignSkills: Array.from({ length: 14 }),
    bonusActions: {
      first: undefined,
      second: undefined,
      third: undefined,
      fourth: undefined,
      fifth: undefined,
      sixth: undefined,
      seventh: undefined,
    },
    savedInventory: [],
    achievments: [],
  };
};

const useCampaignState = create<CampaignsState>(set => ({
  selectedCampaign: undefined,
  setSelectedCampaign: name => {
    const campaigns: Campaign[] = extractCampaigns();
    const foundCamp = campaigns.find(c => c.name === name);
    if (foundCamp) {
      set(store => ({
        ...store,
        selectedCampaign: foundCamp,
      }));
    } else {
      set(store => ({
        ...store,
        selectedCampaign: name
          ? {
              name: name,
              players: [],
            }
          : undefined,
      }));
    }
  },
  addPlayer: (playerName, characterName) => {
    set(store => {
      if (!store.selectedCampaign) return store;
      store.selectedCampaign.players.push(createNewPlayer(playerName, characterName));
      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return store;
    });
  },
  setPdk: (charName, index, skill) => {
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (index > 0 && !character?.pdk[index - 1]) return store;
      if (character) {
        character.pdk[index] = skill;
      }
      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    });
  },
  setCampPerk: (charName, index, isSet) => {
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (character) {
        character.campaignSkills[index] = isSet ? 1 : undefined;
      }
      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    });
  },
  setBonusAction: (charName, actionName, isSet) => {
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (character) {
        if (actionName === 'first') character.bonusActions.first = isSet;
        else if (actionName === 'second') character.bonusActions.second = isSet;
        else if (actionName === 'third') character.bonusActions.third = isSet;
        else if (actionName === 'fourth') character.bonusActions.fourth = isSet;
        else if (actionName === 'fifth') character.bonusActions.fifth = isSet;
        else if (actionName === 'sixth') character.bonusActions.sixth = isSet;
        else if (actionName === 'seventh') character.bonusActions.seventh = isSet;
      }
      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    });
  },
  addInv: (charName, inv) =>
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (character) {
        character.savedInventory.push(inv);
      }

      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    }),
  removeInv: (charName, item) =>
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (character) {
        character.savedInventory = character.savedInventory.filter(i => i !== item);
      }

      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    }),
  addAchievment: (charName, achievment) =>
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (character) {
        character.achievments.push(achievment);
      }

      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    }),
  removeAchievment: (charName, achievment) =>
    set(store => {
      if (!store.selectedCampaign) return store;
      const character: Player | undefined = store.selectedCampaign.players.find(p => p.characterName === charName);
      if (character) {
        character.achievments = character.achievments.filter(i => i !== achievment);
      }

      updatePlayers(store.selectedCampaign.name, store.selectedCampaign.players);
      return { ...store };
    }),
}));

export default useCampaignState;

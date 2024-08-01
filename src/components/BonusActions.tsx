import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { BonusActionCard } from './BonusActionCard';
import useCampaignState from '../state/CampaignState';
import { Player } from '../model';

interface Props {
  selectedPlayer: Player | undefined;
}

export const BonusActions = ({ selectedPlayer }: Props) => {
  return (
    <VStack>
      <Heading>BONUSOWE AKCJE</Heading>
      <BonusActionCard number={1} actionName='first' action={selectedPlayer?.bonusActions.first} activeChar={selectedPlayer?.characterName || ''}/>
      <BonusActionCard number={2} actionName='second' action={selectedPlayer?.bonusActions.second} activeChar={selectedPlayer?.characterName || ''}/>
      <BonusActionCard number={3} actionName='third' action={selectedPlayer?.bonusActions.third} activeChar={selectedPlayer?.characterName || ''}/>
      <BonusActionCard number={4} actionName='fourth' action={selectedPlayer?.bonusActions.fourth} activeChar={selectedPlayer?.characterName || ''}/>
      <BonusActionCard number={5} actionName='fifth' action={selectedPlayer?.bonusActions.fifth} activeChar={selectedPlayer?.characterName || ''}/>
      <BonusActionCard number={6} actionName='sixth' action={selectedPlayer?.bonusActions.sixth} activeChar={selectedPlayer?.characterName || ''}/>
      <BonusActionCard number={7} actionName='seventh' action={selectedPlayer?.bonusActions.seventh} activeChar={selectedPlayer?.characterName || ''}/>
    </VStack>
  );
};

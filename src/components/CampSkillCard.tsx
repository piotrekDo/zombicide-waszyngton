import { Checkbox, HStack, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import useCampaignState from '../state/CampaignState';

interface Props {
  name: string;
  desc: string;
  isChecked: boolean;
  index: number;
  selectedChar: string;
}

export const CampSkillCard = ({ name, desc, isChecked, index, selectedChar }: Props) => {
  const setPerk = useCampaignState(s => s.setCampPerk);
  return (
    <HStack w={'100%'} >
      <Tooltip label={desc}>
        <Text flexBasis={'70%'}>{name}</Text>
      </Tooltip>
      <Checkbox isChecked={isChecked} onChange={e => setPerk(selectedChar, index, !isChecked)}></Checkbox>
    </HStack>
  );
};

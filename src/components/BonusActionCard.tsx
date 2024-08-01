import { Checkbox, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { BonusAction } from '../model';
import useCampaignState from '../state/CampaignState';

interface Props {
  number: number;
  actionName: string;
  action: BonusAction;
  activeChar: string;
}

export const BonusActionCard = ({ number, actionName, action, activeChar }: Props) => {
  const setBonusAction = useCampaignState(s => s.setBonusAction);
  return (
    <HStack>
      <Flex
        w={'20px'}
        h={'20px'}
        bg={action ? 'green' : 'white'}
        color={'black'}
        justify={'center'}
        align={'center'}
        cursor={'pointer'}
        onClick={e => setBonusAction(activeChar, actionName, 'reserve')}
      >
        {number}
      </Flex>
      <Checkbox
        isDisabled={action === undefined}
        isChecked={action === 'used'}
        onChange={e => {
          if(!action) return;
          setBonusAction(activeChar, actionName, 'used');
        }}
      ></Checkbox>
    </HStack>
  );
};

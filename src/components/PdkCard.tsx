import { Box, HStack, Text, Flex, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { PdkSkill } from '../model';
import useCampaignState from '../state/CampaignState';

interface Props {
  index: number;
  hasSkill?: boolean;
  earned: PdkSkill;
  selectedChar: string;
}
export const PdkCard = ({ index, hasSkill = false, earned, selectedChar }: Props) => {
  const setPdk = useCampaignState(s => s.setPdk);
  const [isHoovering, setIsHoovering] = useState(false);
  return (
    <HStack onMouseEnter={() => setIsHoovering(true)} onMouseLeave={() => setIsHoovering(false)} fontSize={'.8rem'}>
      <Flex
        justify={'center'}
        align={'center'}
        color={earned ? 'white': 'black'}
        bg={earned && 'green' || 'white'}
        borderRadius={'3px'}
        w={'25px'}
        boxShadow={'4px 4px 24px 0px rgba(66, 68, 90, 1)'}
      >
        <Text fontWeight={500}>{index + 1}</Text>
      </Flex>
      {hasSkill && (
        <Flex color={'grey'} boxShadow={'8px 8px 24px 0px rgba(66, 68, 90, 1)'} h={'20px'}>
          <Button borderRadius={'5px 0 0 5px'} bg={'white'} fontWeight={earned === 'action' ? 600 : 200} h={'20px'} onClick={() => setPdk(selectedChar, index, 'action')}>
            +1 Bonusowa Akcja
          </Button>
          <Button borderRadius={'0 5px 5px 0'} bg={'white'} fontWeight={earned === 'skill' ? 600 : 200} h={'20px'} onClick={() => setPdk(selectedChar, index, 'skill')}>
            + 1 Umiejętność Kampanii
          </Button>
        </Flex>
      )}
      {!hasSkill && (
        <Button bg={'white'} w={'360px'} h={'25px'} opacity={isHoovering ? 1 : 0} onClick={() => setPdk(selectedChar, index, 'action')}>
          +
        </Button>
      )}
    </HStack>
  );
};

import { Button, Flex, Heading, Input, InputGroup, InputRightAddon, VStack, Text } from '@chakra-ui/react';
import { Player } from '../model';
import { DeleteIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import useCampaignState from '../state/CampaignState';

interface Props {
  selectedPlayer: Player | undefined;
}

export const Achievments = ({ selectedPlayer }: Props) => {
  const addAchievment = useCampaignState(s => s.addAchievment);
  const removeAchievment = useCampaignState(s => s.removeAchievment);
  const [isHovering, setIsHovering] = useState(false);
  const avhievmentRef = useRef<HTMLInputElement>(null);

  return (
    <VStack
      onMouseEnter={e => setIsHovering(true)}
      onMouseLeave={e => setIsHovering(false)}
      w={'100%'}
      h={'280px'}
      justify={'start'}
    >
      <Heading>Osiągnięcia kampanii</Heading>
      <VStack w={'100%'}>
        {selectedPlayer?.achievments.map(i => (
          <Flex key={i} justify={'space-between'} align={'center'} w={'80%'} px={2}>
            <Text>{i}</Text>
            <DeleteIcon color={'red'} cursor={'pointer'} onClick={e => removeAchievment(selectedPlayer.characterName, i)} />
          </Flex>
        ))}
        <InputGroup size='sm' visibility={isHovering ? 'visible' : 'collapse'}>
          <Input placeholder='sprzęt' ref={avhievmentRef} />
          <InputRightAddon p={0}>
            <Button
              w={'100%'}
              h={'100%'}
              onClick={e => {
                addAchievment(selectedPlayer!.characterName, avhievmentRef.current!.value);
                avhievmentRef.current!.value = '';
              }}
            >
              +
            </Button>
          </InputRightAddon>
        </InputGroup>
      </VStack>
    </VStack>
  );
};

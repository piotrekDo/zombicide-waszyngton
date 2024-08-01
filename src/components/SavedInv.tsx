import { Button, Flex, Heading, Icon, Input, InputGroup, InputRightAddon, Text, VStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Player } from '../model';
import useCampaignState from '../state/CampaignState';
import { DeleteIcon } from '@chakra-ui/icons';

interface Props {
  selectedPlayer: Player | undefined;
}

export const SavedInv = ({ selectedPlayer }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const addGear = useCampaignState(s => s.addInv);
  const removeGear = useCampaignState(s => s.removeInv);
  const gearRef = useRef<HTMLInputElement>(null);
  return (
    <VStack onMouseEnter={e => setIsHovering(true)} onMouseLeave={e => setIsHovering(false)} w={'100%'} h={'280px'} justify={'start'}>
      <Heading>Zachowany Ekwipunek</Heading>
      <VStack w={'100%'}>
        {selectedPlayer?.savedInventory.map(i => (
          <Flex key={i} justify={'space-between'} align={'center'} w={'80%'} px={2}>
            <Text>{i}</Text>
            <DeleteIcon color={'red'} cursor={'pointer'} onClick={e => removeGear(selectedPlayer.characterName, i)} />
          </Flex>
        ))}
        <InputGroup size='sm' visibility={isHovering ? 'visible' : 'collapse'}>
          <Input placeholder='sprzęt' ref={gearRef} />
          <InputRightAddon p={0}>
            <Button
              w={'100%'}
              h={'100%'}
              onClick={e => {
                addGear(selectedPlayer!.characterName, gearRef.current!.value);
                gearRef.current!.value = '';
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

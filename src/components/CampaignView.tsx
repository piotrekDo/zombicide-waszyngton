import { Box, Button, Flex, Heading, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Player } from '../model';
import useCampaignState from '../state/CampaignState';
import { AddPlayerModal } from './AddPlayerModal';
import { PdkCard } from './PdkCard';
import { CampSkillCard } from './CampSkillCard';
import { BonusActions } from './BonusActions';
import { SavedInv } from './SavedInv';
import { CampSkills } from './CampSkills';
import { Pdk } from './Pdk';
import { Achievments } from './Achievments';

export const CampaignView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedCampaign } = useCampaignState();
  const [selectedChar, setSelectedChar] = useState<Player | undefined>(selectedCampaign?.players[0]);
  return (
    <VStack w={'100vw'} minH={'100vh'} pt={'10px'} color={'white'} zIndex={100}>
      <Button pos={'absolute'} top={4} right={5} onClick={onOpen}>
        Dodaj Gracza
      </Button>
      <HStack mt={5}>
        {selectedCampaign?.players &&
          selectedCampaign.players.map((p, index) => (
            <Button
              key={index}
              colorScheme={p.characterName === selectedChar?.characterName ? 'whatsapp' : 'linkedin'}
              transform={p.characterName === selectedChar?.characterName ? 'translateY(-5px)' : ''}
              onClick={() =>
                setSelectedChar(selectedCampaign.players.find(char => char.characterName === p.characterName))
              }
            >
              {p.playerName} / {p.characterName}
            </Button>
          ))}
      </HStack>
      {selectedCampaign && selectedCampaign?.players.length > 0 && (
        <VStack w={'100vw'} h={'100%'} mt={5} p={1}>
          <HStack w={'100%'} justifyContent={'space-around'}>
            <HStack bg={'white'} fontWeight={800} color={'black'} py={1} px={2}>
              <Text>IMIĘ OCALAŁEGO</Text>
              <Text>{selectedChar?.characterName}</Text>
            </HStack>
            <HStack bg={'white'} fontWeight={800} color={'black'} py={1} px={2}>
              <Text>IMIĘ GRACZA</Text>
              <Text>{selectedChar?.playerName}</Text>
            </HStack>
          </HStack>
          <HStack w={'100%'} h={'100%'} align={'start'} justify={'start'}>
            <HStack w={'50%'} h={'100%'} align={'start'}>
              <Pdk selectedChar={selectedChar} />
              <CampSkills selectedChar={selectedChar} />
            </HStack>
            <VStack w={'50%'} h={'100%'} align={'start'} justify={'start'}>
              <HStack w={'100%'} h={'100%'}>
                <BonusActions selectedPlayer={selectedChar} />
                <SavedInv selectedPlayer={selectedChar} />
              </HStack>
              <Achievments selectedPlayer={selectedChar}/>
            </VStack>
          </HStack>
        </VStack>
      )}

      <AddPlayerModal isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
};

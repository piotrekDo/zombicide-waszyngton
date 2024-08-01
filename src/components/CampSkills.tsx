import { VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { CampSkillCard } from './CampSkillCard';
import { Player } from '../model';

interface Props {
  selectedChar: Player | undefined;
}

export const CampSkills = ({ selectedChar }: Props) => {
  return (
    <VStack h={'100%'} p={2} justify={'space-evenly'}>
      <Heading>UMIEJĘTNOŚCI KAMPANII</Heading>
      <CampSkillCard
        name='Co za smród'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[0]}
        index={0}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Krok w bok'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[1]}
        index={1}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Nocny wojownik'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[2]}
        index={2}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Obrońca domu'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[3]}
        index={3}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Odruchy bojowe'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[4]}
        index={4}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Pewna ręka'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[5]}
        index={5}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Przychylność losu'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[6]}
        index={6}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Rozpoczyna z 2PA'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[7]}
        index={7}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Rozpoczyna z kartą amunicji'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[8]}
        index={8}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Rozpoczyna z zestawem naprawczym'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[9]}
        index={9}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Skromna postura'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[10]}
        index={10}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Szybkie ręce'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[11]}
        index={11}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Zbawca'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[12]}
        index={12}
        selectedChar={selectedChar?.characterName || ''}
      />
      <CampSkillCard
        name='Zbieracz'
        desc=''
        isChecked={!!selectedChar?.campaignSkills[13]}
        index={13}
        selectedChar={selectedChar?.characterName || ''}
      />
    </VStack>
  );
};

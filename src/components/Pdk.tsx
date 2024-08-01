import { Flex, Heading, VStack } from '@chakra-ui/react';
import { Player } from '../model';
import { PdkCard } from './PdkCard';

interface Props {
  selectedChar: Player | undefined;
}

export const Pdk = ({ selectedChar }: Props) => {
  return (
    <VStack id='pdk' bgColor={'yellow.400'} p={3}>
      <VStack alignItems={'start'} spacing={1}>
        <Flex w={'100%'} justify={'center'}>
          <Heading bg={'black'} w={'50%'} textAlign={'center'} color={'yellow.400'} fontSize={'2rem'}>
            PDK
          </Heading>
        </Flex>
        {Array.from({ length: 20 }).map((_, index) => {
          const hasSkill = (index > 1 && (index - 1) % 3 === 0) || index === 1;
          return (
            <PdkCard
              key={index}
              index={index}
              hasSkill={hasSkill}
              earned={selectedChar?.pdk[index]}
              selectedChar={selectedChar?.characterName || ''}
            />
          );
        })}
      </VStack>
    </VStack>
  );
};

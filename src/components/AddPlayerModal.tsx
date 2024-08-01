import { Button, FormControl, FormHelperText, FormLabel, Input, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import useCampaignState from '../state/CampaignState';
import { useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPlayerModal = ({ isOpen, onClose }: Props) => {
  const {addPlayer} = useCampaignState();
  const playerRef = useRef<HTMLInputElement>(null);
  const characterRef = useRef<HTMLInputElement>(null);

  const onAddNewHandler = () => {
    const playerName = playerRef.current?.value;
    const charName = characterRef.current?.value;

    if(!playerName || !charName) return 
    addPlayer(playerName, charName)
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={10}>
        <FormControl>
          <FormLabel>Imię gracza</FormLabel>
          <Input type='text' ref={playerRef} />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Postać</FormLabel>
          <Input type='text' ref={characterRef} />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button colorScheme='green' onClick={onAddNewHandler}>Dodaj</Button>
      </ModalContent>
    </Modal>
  );
};

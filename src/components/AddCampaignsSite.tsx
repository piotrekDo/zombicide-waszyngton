import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import useCampaignState from '../state/CampaignState';
import { Campaign } from '../model';

function AddCampaignsSite() {
  const { setSelectedCampaign } = useCampaignState();
  const [isAddingCamp, setIsAddingCamp] = useState(false);
  const [addCampainError, setAddCampaignError] = useState('');
  const campaignInputRef = useRef<HTMLInputElement>(null);

  const onAddCampaignHandler = () => {
    const value = campaignInputRef!.current!.value;
    const localStorageCampaigns = localStorage.getItem('campaigns');
    const campaigns: Campaign[] = (localStorageCampaigns && JSON.parse(localStorageCampaigns)) || [];
    if (campaigns.map(c => c.name).indexOf(value) > -1) {
      setAddCampaignError('kampania istnieje');
    } else {
      const newCamp: Campaign = {
        name: value,
        players: [],
      };
      campaigns.push(newCamp);
      localStorage.setItem('campaigns', JSON.stringify(campaigns));
      setAddCampaignError('');
      setIsAddingCamp(false);
      setSelectedCampaign(value);
    }
  };
  return (
    <>
      {!isAddingCamp && (
        <Button colorScheme={'green'} w={'300px'} h={'100px'} mt={10} onClick={() => setIsAddingCamp(s => !s)}>
          Dodaj kampanię
        </Button>
      )}
      {isAddingCamp && (
        <Flex mt={2}>
          <FormControl color={'wheat'}>
            <FormLabel>Nazwa</FormLabel>
            <Input type='text' ref={campaignInputRef} />
            <FormHelperText color={'red'}>{addCampainError}</FormHelperText>
            <Button mt={2} colorScheme='green' w={'100%'} onClick={onAddCampaignHandler}>
              Dodej
            </Button>
          </FormControl>
        </Flex>
      )}
    </>
  );
}

export default AddCampaignsSite;

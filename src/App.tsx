import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import bg from '../src/assets/washington.jpg';
import { useEffect, useRef, useState } from 'react';
import AddCampaignsSite from './components/AddCampaignsSite';
import useCampaignState from './state/CampaignState';
import { CampaignView } from './components/CampaignView';
import { Campaign } from './model';

function App() {
  const { selectedCampaign, setSelectedCampaign } = useCampaignState();
  const [savedCampaigns, setSavedCampaigns] = useState<Campaign[]>();

  useEffect(() => {
    const campaigns = localStorage.getItem('campaigns');
    if (campaigns) {
      setSavedCampaigns(JSON.parse(campaigns));
    }
  }, [selectedCampaign]);

  return (
    <Flex
      pos={'relative'}
      w={'100vw'}
      minH={'100vh'}
      bgColor={'black'}
      justify={'center'}
      align={'center'}
      flexDir={'column'}
    >
      <Box
        pos={'absolute'}
        opacity={0.3}
        w={'100vw'}
        bgColor={'black'}
        minH={'100vh'}
        bgImage={bg}
        bgPosition={'center'}
        bgSize={'contain'}
        bgRepeat={'no-repeat'}
      ></Box>
      <Box pos={'absolute'} top={1} left={1} color={'white'}>
        {selectedCampaign?.name}
      </Box>
      {!selectedCampaign && savedCampaigns?.map(c => <Button key={c.name} onClick={() => setSelectedCampaign(c.name)}>{c.name}</Button>)}
      {!selectedCampaign && <AddCampaignsSite />}
      {selectedCampaign && <CampaignView />}
    </Flex>
  );
}

export default App;

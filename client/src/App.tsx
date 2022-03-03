import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  theme,
  IconButton,
  Center,
  VStack,
  HStack,
  Button
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import Sevsegs from './Sevsegs';

const URL = 'http://192.168.1.103:8080';

function App() {

  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch(`${URL}/set?n=${currentNumber}`);
  }, [currentNumber]); 

  function numberUp() {
    if(currentNumber < 9) {
      setCurrentNumber(prevNumber => prevNumber + 1);
    }
  }

  function numberDown() {
    if(currentNumber > 0) {
      setCurrentNumber(prevNumber => prevNumber - 1);
    }
  }

  async function count(dir: 'down' | 'up') {
    setBusy(true);
    fetch(`${URL}/count${dir}`);
    if(dir === 'down') {
      for(let i = 9; i >=0; i--) {
        setCurrentNumber(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }else {
      for(let i = 0; i < 10; i++) {
        setCurrentNumber(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    setBusy(false);
  }

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh">
        <VStack>
          <Sevsegs n={currentNumber} />
          <HStack>
            <IconButton aria-label='up' disabled={busy || currentNumber === 9} onClick={numberUp} icon={<ArrowUpIcon color="green" />}/>
            <IconButton aria-label='down' disabled={busy || currentNumber === 0} onClick={numberDown} icon={<ArrowDownIcon color="red" />}/>
          </HStack>
          <Button w="100%" disabled={busy} onClick={() => setCurrentNumber(0)}>Reset</Button>
          <Button w="100%" disabled={busy} onClick={() => count('down')}>Countdown</Button>
          <Button w="100%" disabled={busy} onClick={() => count('up')}>Countup</Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}
  



export default App;

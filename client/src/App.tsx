import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  theme,
  IconButton,
  Heading,
  Center,
  VStack,
  HStack,
  Button
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

const URL = 'http://localhost:8080';

function App() {

  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if(currentNumber !== null) {
      fetch(`${URL}/set?n=${currentNumber}`);
    }
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
    await fetch(`${URL}/count${dir}`);
    setBusy(false);
  }

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh">
        <VStack>
          <Heading size="4xl">{currentNumber}</Heading>
          <HStack>
            <IconButton aria-label='up' disabled={busy || currentNumber === 9} onClick={numberUp} icon={<ArrowUpIcon color="green" />}/>
            <IconButton aria-label='down' disabled={busy || currentNumber === 0} onClick={numberDown} icon={<ArrowDownIcon color="red" />}/>
          </HStack>
          <Button w="100%" disabled={busy} onClick={() => setCurrentNumber(0)}>Reset</Button>
          <Button w="100%" disabled={busy} onClick={() => count('down')}>Countdown</Button>
          <Button w="100%" disabled={busy} onClick={() => count('up')}>Contup</Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}
  



export default App;

import { filter, Flex, FormControl, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useGlobalContext } from '../../context';

const ContinentFilter = () => {
  const [continents, setContinents] = useState([]);
  const { countries } = useGlobalContext();

  return (
    <Flex m='3rem auto' w='500px'>
      <FormControl>
        <Select id='country' placeholder='Select country'>
          {}
        </Select>
      </FormControl>
    </Flex>
  );
};

export default ContinentFilter;

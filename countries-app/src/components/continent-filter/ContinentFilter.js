import { Flex, FormControl, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useGlobalContext } from '../../context';

const ContinentFilter = () => {
  const [continents, setContinents] = useState([]);
  const { countries } = useGlobalContext();

  const filteredContinents = (continent) => {
    const newContinent = countries.filter(
      (item) => item.continents === item.continent
    );
    setContinents(newContinent);
  };

  console.log(continents);

  return (
    <Flex m='3rem auto' w='300px'>
      <FormControl>
        <Select id='country' placeholder='Select Continent'>
          {countries.map((item, index) => {
            return <option key={index}>{item.continents}</option>;
          })}
        </Select>
      </FormControl>
    </Flex>
  );
};

export default ContinentFilter;

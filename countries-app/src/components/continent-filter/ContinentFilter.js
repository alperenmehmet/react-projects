import { Flex, FormControl, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useGlobalContext } from '../../context';

const ContinentFilter = () => {
  const [regions, setRegions] = useState([]);
  const { countries } = useGlobalContext();

  const filteredContinent = (continent) => {
    const newItem = countries.filter((item) => {
      return item.continents === continent;
    });
    setRegions(newItem);
  };

  console.log(regions);

  return (
    <Flex m='3rem auto' w='300px'>
      <FormControl>
        <Select id='country' placeholder='Select Continent'>
          {countries.map((item, index) => {
            return (
              <option key={index} onSubmit={() => filteredContinent()}>
                {item.continents}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Flex>
  );
};

export default ContinentFilter;

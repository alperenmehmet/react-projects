import { Flex, FormControl, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../../context';

const ContinentFilter = () => {
  const { countries, filterCountryByRegion } = useGlobalContext();

  const filteredRegion = [
    'ALL',
    ...new Set(countries.map((country) => country.region)),
  ];

  return (
    <Flex m='3rem auto' w='300px'>
      <FormControl>
        <Select id='country' placeholder='Select Continent'>
          {filteredRegion.map((region, index) => {
            return (
              <option
                key={index}
                onChange={() => filterCountryByRegion(region)}
              >
                {region}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Flex>
  );
};

export default ContinentFilter;

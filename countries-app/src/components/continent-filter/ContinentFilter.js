import { Flex, FormControl, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../../context';

const ContinentFilter = () => {
  const {
    filterCountryByRegion,
    filteredRegion,
    handleDropDown,
    dropDownValue,
  } = useGlobalContext();

  return (
    <Flex m='3rem auto' w='300px'>
      <FormControl value='Select Continent'>
        <Select id='country' onChange={handleDropDown} value={dropDownValue}>
          {filteredRegion.map((region, index) => {
            return (
              <option
                key={index}
                onChange={() => filterCountryByRegion(region)}
                value={region}
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

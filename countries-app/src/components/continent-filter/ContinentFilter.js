import { Flex, FormControl, MenuOptionGroup, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../../context';

const ContinentFilter = () => {
  const {
    filterCountryByRegion,
    filteredRegion,
    setDropDownValue,
    dropDownValue,
  } = useGlobalContext();

  const handleChange = (value) => {
    setDropDownValue(value);
    filterCountryByRegion(value);
  };

  return (
    <Flex m='3rem auto' w='300px'>
      <FormControl value='Select Continent'>
        <Select
          id='country'
          value={dropDownValue}
          onChange={(e) => handleChange(e.target.value)}
        >
          {filteredRegion.map((region, index) => {
            return (
              <option key={index} value={region}>
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

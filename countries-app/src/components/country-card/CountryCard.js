import { Box, Text, Image } from '@chakra-ui/react';
import millify from 'millify';
import { Link } from 'react-router-dom';

export function CountryCard({ name, population, region, capital, flags }) {
  const newName = name.official.replace(/\s/g, '').toLowerCase();

  const theme = localStorage.getItem('chakra-ui-color-mode');

  // const styleForDarkMode = {
  //   backgroundColor: '#2D3748',
  //   color: '#FFFFFF',
  // };
  // const styleForLightMode = {
  //   backgroundColor: '#FFFFFF',
  //   color: '#000000',
  // };
  // const styleForTheme = theme === 'dark' ? styleForDarkMode : styleForLightMode;

  return (
    <Box className='country-card'>
      <Link to={`/${newName}`}>
        <Image src={flags.png} alt='country' />
      </Link>
      <Text className='country-name' fontSize='3xl' mb={3} fontWeight='bold'>
        {name.official}
      </Text>
      <Box className='country-info'>
        <Text className='country-population'>
          <span>Population :</span> {millify(population)}
        </Text>
        <Text className='country-region'>
          <span>Region :</span> {region}
        </Text>
        <Text className='country-capital'>
          <span>Capital :</span> {capital}
        </Text>
      </Box>
    </Box>
  );
}

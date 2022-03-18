import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_COUNTRY } from '../../constants/api';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function SingleCountry() {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(`${URL_COUNTRY}${name}`);
        const data = await response.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCountry();
  }, [name]);

  console.log(country[0]);

  return (
    <Flex className='section-center wrapper'>
      <Box>
        <Image
          src={country[0]?.flags.png}
          alt='country'
          className='box single-image'
          width='50rem'
        />
      </Box>
      <Box className='box'>
        <Text fontSize='xl' fontWeight='bold'>
          <Text fontSize='lg'>Population : {country[0]?.population}</Text>
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Native Name: {country[0]?.name?.nativeName?.spa?.official}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Region : {country[0]?.region}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Currencies :
          {country[0]?.currencies[Object.keys(country[0]?.currencies)[0]].name}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Subregion : {country[0]?.subregion}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Capital : {country[0]?.capital}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Top Level Domain : {country[0]?.tld}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Languages :
          {country[0]?.languages[Object.keys(country[0]?.languages)[0]]}
        </Text>
        <Text fontSize='xl' fontWeight='bold'>
          Borders:
          {country[0]?.borders?.map((border, index) => {
            return <Text key={index}>{border}</Text>;
          })}
        </Text>
      </Box>
    </Flex>
  );
}

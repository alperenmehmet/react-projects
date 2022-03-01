import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_COUNTRY } from '../../constants/api';

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
    <div className='section-center'>
      <div>
        <img src='' alt='country' />
        <h3></h3>
        <h2></h2>
        <h2></h2>
      </div>
      <div></div>
    </div>
  );
}

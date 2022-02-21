import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL_COUNTRY } from '../../constants/api';

export function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(`${URL_COUNTRY}${name}`);
        const data = await response.json();
        setCountry(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCountry();
  }, [name]);
  return <div>hello single page</div>;
}

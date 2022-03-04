import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd4e851a73emshdc06d0db4cdbce6p1b6fc7jsnb76e25b94653',
    },
  });
  return data;
};

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BASE_URL, URL_ALL_COUNTRIES, URL_COUNTRY } from './constants/api';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch(
        searchTerm ? `${URL_COUNTRY}${searchTerm}` : `${URL_ALL_COUNTRIES}`
      );
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  }, [searchTerm]);
  console.log(countries);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <AppContext.Provider
      value={{ countries, setCountries, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

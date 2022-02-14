import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BASE_URL } from './constants/api';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch('https://restcountries.com/v2/all');
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(countries);

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <AppContext.Provider value={{ countries, setCountries }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

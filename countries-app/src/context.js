import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BASE_URL, URL_ALL_COUNTRIES, URL_COUNTRY } from './constants/api';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountry, setFilteredCountry] = useState([]);

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

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const filterCountryByRegion = (region) => {
    if (region === 'ALL') {
      setCountries(countries);
      return;
    }
    const newCountries = countries.filter(
      (country) => country.region === region
    );
    setFilteredCountry(newCountries);
  };

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        searchTerm,
        setSearchTerm,
        filteredCountry,
        setFilteredCountry,
        filterCountryByRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

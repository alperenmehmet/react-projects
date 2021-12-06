import React, { useCallback, useContext, useState } from 'react';

const url =
  'https://api.themoviedb.org/3/movie/550?api_key=2a8747b7eb93efdd09838f463b8cad03&callback=test';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      if (results) {
        const newMovies = results.map((movie) => {});
      }
    } catch (err) {
      console.log(err);
    }
  });
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

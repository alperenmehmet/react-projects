import React, {useCallback, useContext, useEffect, useState} from 'react';
import {BASE_URL, IMAGE_URL, KEY, POPULAR_MOVIE_BASE} from "./constants/constants";
import * as url from "url";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchMovie = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(searchTerm ? `${BASE_URL}${KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false` : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?&api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            const { results } = data;
            console.log(results)
            if (results) {
                const newMovies = results.map((movie) => {
                    const {id, original_title, overview, vote_average, poster_path} = movie;

                    return {
                        id: id,
                        name: original_title,
                        image: poster_path,
                        desc: overview,
                        rate: vote_average,
                    };
                });
                setMovies(newMovies)
            } else{
                setMovies(false)
            }setLoading(false)
        }catch (err){
        setLoading(false)
        }
    },[searchTerm]);

    useEffect(()=>{
        fetchMovie()
    },[fetchMovie])
    return <AppContext.Provider value={{loading,movies,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { BASE_SEARCH_URL, BASE_URL, KEY } from './constants/constants'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [count, setCount] = useState(1)
  const [newPageMovies, setNewPageMovies] = useState([])

  const fetchMovie = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(
        searchTerm
          ? `${BASE_SEARCH_URL}${KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
          : `${BASE_URL}popular?api_key=${process.env.REACT_APP_API_KEY}&page=${count}`
      )
      const data = await response.json()
      const { results } = data
      console.log(results)
      if (results) {
        const newMovies = results.map((movie) => {
          const { id, original_title, overview, vote_average, poster_path } =
            movie
          return {
            id: id,
            name: original_title,
            image: poster_path,
            desc: overview,
            rate: vote_average
          }
        })
        setMovies(newMovies)
      } else {
        setMovies(null)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }, [searchTerm, count])

  useEffect(() => {
    fetchMovie()
  }, [fetchMovie])
  console.log('context', count)

  return (
    <AppContext.Provider
      value={{
        loading,
        movies,
        searchTerm,
        setSearchTerm,
        count,
        setCount,
        newPageMovies,
        setNewPageMovies
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

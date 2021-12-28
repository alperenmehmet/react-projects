import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BASE_URL} from "../constants/constants";

const SingleMovie = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
            `${BASE_URL}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        const data = await response.json()
        setMovie(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [id])

console.log(movie)
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col"><img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}/></div>
      </div>
    </div>
  )
}

export default SingleMovie

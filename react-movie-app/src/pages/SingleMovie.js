import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BASE_URL} from "../constants/constants";
import { FaHeart } from 'react-icons/fa'


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
      <div className="row row-cols-2 mt-5">
        <div className="col">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} className="content-img"/>
        </div>
        <div className="col">
          <h2 >{movie.title}</h2>
          <div>
            <h4 className="mt-3"><FaHeart className="icon"/>{movie.vote_average}</h4>
            <h4>{movie.runtime}</h4>
          </div>
          </div>
      </div>
    </div>
  )
}

export default SingleMovie

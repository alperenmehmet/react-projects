import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        const data = await response.json()
      } catch (err) {
        console.log(err)
      }
    }
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col">Images</div>
        <div className="col">
          <p>
            <span>Movie Name: </span>
          </p>
          <p>
            <span>Release Data: </span>
          </p>
          <p>
            <span>Movie Description: </span>
          </p>
          <p>
            <span>Genre: </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie

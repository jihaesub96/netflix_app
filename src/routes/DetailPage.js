import axios from '../api/axios'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiThumbsUp } from 'react-icons/fi'
import '../styles/Detail.css'

function DetailPage({
  title,
  overview,
  name,
  release_date,
  first_air_Date,
  vote_average,
}) {
  const [movie, setMovie] = useState({})

  let { movieId } = useParams()
  console.log('movieId', movieId)
  console.log('useParams()', useParams())

  const fetchData = async () => {
    const request = await axios.get(`/movie/${movieId}`)
    console.log('request', request)
    setMovie(request.data)
  }

  useEffect(() => {
    fetchData()
  }, [movieId])

  const ref = useRef()

  if (!movie) return <div>...loading</div>

  return (
    <section ref={ref}>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  )
}

export default DetailPage

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { getMovie } from '../store/actions/movieAction';



export default function MovieDetailPage() {
  const {id} = useParams()
  const dispatch = useDispatch()

  const movie = useSelector(state => state.movieState.movie)
  console.log(movie);

  useEffect(() => {
    dispatch(getMovie(id))
  }, [])


  return (
    <div>
      <p>{movie.title}</p>
    </div>
  )
}

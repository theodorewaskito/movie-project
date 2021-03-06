import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { 
  getMovies
} from '../store/actions/movieAction';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import MovieCard from '../components/MovieCard';

export default function MoviePage() {
  const dispatch = useDispatch()

  const movies = useSelector(state => state.movieState.movies)
  const loading = useSelector(state => state.movieState.isLoading)
  const error = useSelector(state => state.movieState.isError)  
  const page = useSelector(state => state.movieState.moviePage) 

  const handleChange = (event, value) => {
    // console.log("nilai", value);
    dispatch(getMovies(value));
  };

  console.log(movies);

  useEffect(() => {
    dispatch(getMovies(page))
  }, [])
  
  return (
    <Box sx={{ m: 2 }}>
      {(() => {
        if (loading) {
          return (
            <Box>Loading ...</Box>
          )
        } else {
          return (
            <Grid container spacing={2}>
              {movies?.results?.map((movie, index) => {
                return (
                  <Grid item xs={1.5}>
                    <MovieCard
                      key={index} 
                      movie={movie}
                    />
                  </Grid>
                )
              })}
            </Grid>
          )
        }

      })()}


      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Stack spacing={2} sx={{ my: 4 }}>
          <Pagination 
            count={movies.total_pages} 
            variant="outlined" 
            shape="rounded" 
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Box>
    </Box>
  )
}

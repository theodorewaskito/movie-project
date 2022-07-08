import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { 
  getGenreMovies
} from '../store/actions/genreAction';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import MovieCard from '../components/MovieCard';

export default function GenreMoviePage() {
  const {id} = useParams()

  const dispatch = useDispatch()

  const genreMovies = useSelector(state => state.genreState.genreMovies) 
  // const page = useSelector(state => state.movieState.moviePage) 

  console.log(genreMovies);

  useEffect(() => {
    dispatch(getGenreMovies(id))
  }, [])

  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={2}>
        {genreMovies?.results?.map((movie, index) => {
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

      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Stack spacing={2} sx={{ my: 4 }}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Box>
    </Box>
  )
}

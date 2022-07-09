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
import Typography from '@mui/material/Typography';

import MovieCard from '../components/MovieCard';

export default function GenreMoviePage() {
  const {id} = useParams()

  const dispatch = useDispatch()

  const genreMovies = useSelector(state => state.genreState.genreMovies) 
  const genreName = useSelector(state => state.genreState.genreName) 
  const page = useSelector(state => state.genreState.page) 
  const loading = useSelector(state => state.movieState.isLoading)


  console.log(genreMovies);
  console.log( "NAme", genreName);

  const handleChange = (event, value) => {
    // console.log("nilai", value);
    dispatch(getGenreMovies(id, value));
  };

  useEffect(() => {
    dispatch(getGenreMovies(id, page))
  }, [page])

  return (
    <Box sx={{ m: 2 }}>
      {(() => {
        if (loading) {
          return (
            <Box>Loading ...</Box>
          )
        } else {
          return (
            <Box

            >
              <Typography variant="h5" sx={{mb: 3}}>
                {genreName}
              </Typography>
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
            </Box>
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
            count={genreMovies.total_pages} 
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

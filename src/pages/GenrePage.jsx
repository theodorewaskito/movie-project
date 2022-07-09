import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { 
  getGenres,
  getGenreMovies
} from '../store/actions/genreAction';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GenreCard from '../components/GenreCard';

export default function GenrePage() {
  const dispatch = useDispatch()

  const genres = useSelector(state => state.genreState.genres)
  console.log(genres);
  const loading = useSelector(state => state.movieState.isLoading)

  useEffect(() => {
    dispatch(getGenres())
    dispatch(getGenreMovies(undefined, 1))
  }, [])

  if (loading) {
    return (
      <Box>Loading...</Box>
    )
  } else {
    return (
      <Box sx={{ mx: 2, my: 4   }}>
  
  
          <Box 
            // sx={{ 
            //   display: 'flex', 
            //   justifyContent: 'center' 
            // }}
          >
            <Typography 
              variant="h4"
              sx={{ 
                mb: 3, 
                p: 2,
                // backgroundColor: "#FFCB74",
                // borderRadius: 4,
                fontSize: 20, 
              }}
            >GENRES</Typography>
          </Box>
  
          <Grid container spacing={3}>
            {genres?.genres?.map((genre, index) => {
              return (
                <Grid item xs={3}>
                  <GenreCard
                    key={index} 
                    genre={genre}
                  />
                </Grid>
              )
            })}
          </Grid>
  
  
      </Box>
    )
  }


}

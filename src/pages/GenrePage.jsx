import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { 
  getGenres
} from '../store/actions/genreAction';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GenreCard from '../components/GenreCard';

export default function GenrePage() {
  const dispatch = useDispatch()

  const genres = useSelector(state => state.genreState.genres)
  console.log(genres);

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={2}>
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

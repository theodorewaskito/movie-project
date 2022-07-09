import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { 
  setGenreName
} from '../store/actions/genreAction';

import { getMovie } from '../store/actions/movieAction';

export default function MovieDetailPage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const movie = useSelector(state => state.movieState.movie)
  console.log(movie);
  const loading = useSelector(state => state.movieState.isLoading)


  function imageSource(poster) {
    let image = "https://image.tmdb.org/t/p/w500/" + poster
    return image
  }

  function genreMovie(id, name) {
    dispatch(setGenreName(name))
    navigate(`/genre/${id}`)
  }

  useEffect(() => {
    dispatch(getMovie(id))
  }, [])

  if (loading) {
    return (
      <Box>Loading ...</Box>
    )
  } else {
    return (
      <Box sx={{ m: 3 }}>
        <Typography variant="h4" sx={{mb: 3}}>{movie.title}</Typography>
  
          <Box
            sx={{
              display: "flex"
            }}
          >
            <Box
              component="img"
              sx={{
                // height: 233,
                // width: 350,
                maxHeight: { xs: 233, md: 400 },
                maxWidth: { xs: 350, md: 500 },
                borderRadius: 3
              }}
              alt="The house from the offer."
              src={imageSource(movie.poster_path)}
            />
  
            <Box sx={{mx: 4}}>
              <Box sx={{mb:3}}>

                <Typography sx={{fontWeight: 600}}>
                  Rating :
                </Typography>
              
                {(() => {
                  if(movie.vote_average === 0) {
                    return (
                      <Typography sx={{textAlign: "justify", display: "flex", alignItems: 'center'}}>
                        <StarRateRoundedIcon sx={{ color: "#ffe385", fontSize: 18, mr: 1 }}/>
                        N/A
                      </Typography>
                    )
                  } else {
                    return (
                      <Typography sx={{textAlign: "justify", display: "flex", alignItems: 'center'}}>
                        <StarRateRoundedIcon sx={{ color: "#ffe385", fontSize: 18, mr: 1}}/>
                        {movie.vote_average}
                      </Typography>
                    )
                  }

                })()}
              </Box>
  
              <Box sx={{mb:3}}>
                <Typography sx={{fontWeight: 600}}>
                  Summary :
                </Typography>
                <Typography sx={{textAlign: "justify"}}>
                  {movie.overview}
                </Typography>
              </Box>

              <Box sx={{mb:3}}>
                <Typography sx={{fontWeight: 600}}>
                  Duration :
                </Typography>
                <Typography sx={{textAlign: "justify"}}>
                  {movie.runtime} minutes
                </Typography>
              </Box>

              <Box sx={{mb:3}}>
                <Typography sx={{fontWeight: 600}}>
                  Release Date :
                </Typography>
                <Typography sx={{textAlign: "justify"}}>
                  {movie.release_date}
                </Typography>
              </Box>
  
              <Box sx={{mb:3}}>
                <Typography sx={{fontWeight: 600, mb: 1}}>
                  Genre :
                </Typography>
                <Box sx={{display: 'flex'}}>
                {
                  movie?.genres?.map((genre) => {
                    return (
                      <Button
                        sx={{
                          mr: 2,
                          py: 0.5,
                          backgroundColor: "#FFCB74",
                          color: "black",
                          "&:hover" : {
                            background: "#d2b145"
                          }
                        }}
                        variant="contained"
                        onClick={() => genreMovie(genre.id, genre.name)}
                      > 
                        <Typography gutterBottom component="div" sx={{ fontSize: 12, textTransform: "none" }}>
                          {genre.name}
                        </Typography>
                      </Button>
                    )
                  })
                }
                </Box>
              </Box>
  
            </Box>
          </Box>
  
      </Box>
    )
  }


}

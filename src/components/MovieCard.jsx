import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function MovieCard({movie}) {

  const navigate = useNavigate()

  function imageSource(poster) {
    let image = "https://image.tmdb.org/t/p/w500/" + poster
    return image
  }

  function movieDetail(id) {
    navigate(`/movie/${id}`)
  }

  // function stringLimit(overview) {
  //   let word = overview.slice(0,100) + "..."
  //   return word
  // }

  return (
    <Card sx={{ maxWidth: 345, height: 325 }}>
      <CardActionArea 
        sx={{ height: 325 }}
        onClick={() => movieDetail(movie.id)}
      >
        <CardMedia
          component="img"
          height="200"
          // image="/static/images/cards/contemplative-reptile.jpg"
          src={imageSource(movie.poster_path)}
          alt={movie.title}
        />
        <CardContent sx={{ height: 300 }}>
          <Box
            sx={{
              backgroundColor: "#fefae6",
              border: 1,
              borderColor: "#ffe385",
              borderRadius: 1,
              px: 0.5,
              py: 0.3,
              my: -0.5,
              mb: 1,
              width: 27,
              display: "flex",
              alignItems: 'center'
            }}
          > 

            <StarRateRoundedIcon sx={{ color: "#ffe385", fontSize: 10 }}/>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: 9, ml: 0.3 }}>
              {movie.vote_average}
            </Typography>
          </Box>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 550, fontSize: 10 }}>
            {movie.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {stringLimit(movie.overview)}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

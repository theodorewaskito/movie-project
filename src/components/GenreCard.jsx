import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function GenreCard({genre}) {

  const navigate = useNavigate()

  function genreMovie(id) {
    navigate(`/genre/${id}`)
  }

  return (
    <Button
      sx={{
        // backgroundColor: "#fefae6",
        // border: 1,
        // borderColor: "#ffe385",
        // borderRadius: 1,
        // px: 0.5,
        // py: 0.3,
        // display: "flex",
        // alignItems: 'center'
        width: 230
    }}
    variant="contained"
    onClick={() => genreMovie(genre.id)}
    > 
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 550, fontSize: 10 }}>
        {genre.name}
      </Typography>
    </Button>
  )
}

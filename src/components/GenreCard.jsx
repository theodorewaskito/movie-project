import React from 'react'
import { 
  setGenreName
} from '../store/actions/genreAction';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GenreCard({genre}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function genreMovie(id, name) {
    dispatch(setGenreName(name))
    navigate(`/genre/${id}`)
  }

  return (
    <Button
      sx={{
        width: 230,
        mx: 2,
        py: 1,
        backgroundColor: "#FFCB74",
        color: "black",
        "&:hover" : {
          background: "#d2b145"
        }
      }}
      variant="contained"
      onClick={() => genreMovie(genre.id, genre.name)}
    > 
      <Typography gutterBottom component="div" sx={{ fontWeight: 550, fontSize: 10 }}>
        {genre.name}
      </Typography>
    </Button>
  )
}

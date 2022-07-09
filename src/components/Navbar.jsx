import React from 'react'
import { 
  getMovies
} from '../store/actions/movieAction';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function getMovie() {
    dispatch(getMovies(1))
    navigate(`/`)
  }

  function getGenres() {
    navigate(`/genre`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FFCB74"}}>
        <Toolbar>
          <Box
            component="img"
            sx={{
              width: 100,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="MovieFest"
            src="https://i.ibb.co/hcmSH2c/ell.jpg"
          />
          <Box sx={{ml:2}}>
            <Button 
              color="inherit"
              onClick={() => getMovie()}
              sx={{ mx: 2, color: "#07031A" }}
            >Movies</Button>
            <Button 
              color="inherit"
              onClick={() => getGenres()}
              sx={{ mx: 2, color: "#07031A" }}
            >Genres</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

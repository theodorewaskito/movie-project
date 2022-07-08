import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()

  function getMovies() {
    navigate(`/`)
  }

  function getGenres() {
    navigate(`/genre`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Button 
              color="inherit"
              onClick={() => getMovies()}
            >Movies</Button>
            <Button 
              color="inherit"
              onClick={() => getGenres()}
            >Genres</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Box,
  CssBaseline,
} from '@mui/material';
import './Homepage.css'; // Ensure this path is correct

const Homepage = () => {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        backgroundImage: 'url(https://trello.com/1/cards/6786259a470356581cf02daa/attachments/67862798ba052a83bc51773f/download/wallpaper.jfif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        border: '5px solid #00BFFF', // Blue border
      }}
    >
      <CssBaseline />
      <AppBar position="static" sx={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            We’ve got you for your next vacation
          </Typography>
          <Typography variant="h6">☰</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5">Recent locations</Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://via.placeholder.com/300x200" // Replace with your image URL
                  alt="Johannesburg"
                />
                <CardContent>
                  <Typography variant="h6">
                    <span role="img" aria-label="location">📍</span> Johannesburg
                  </Typography>
                  <Typography variant="body2">2025 / 01 / 14</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <TextField
            variant="outlined"
            placeholder="Search with location name"
            sx={{ width: '300px', background: 'white' }}
          />
          <Button variant="contained" sx={{ ml: 1 }}>
            🔍
          </Button>
        </Box>
      </Box>
      <footer>
        <Typography variant="body2" sx={{ mt: 4 }}>
          All rights reserved @2025
        </Typography>
      </footer>
    </Container>
  );
};

export default Homepage;
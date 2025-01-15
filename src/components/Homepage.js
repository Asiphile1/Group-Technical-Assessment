import React, { useState } from 'react';
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
  Box,
  CssBaseline,
  InputAdornment,
  IconButton,
} from '@mui/material';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
  // Array of recent locations with their respective details
  const recentLocations = [
    {
      name: 'Johannesburg',
      date: '2025 / 01 / 14',
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg', // Replace with your image URL
    },
    {
      name: 'Cape Town',
      date: '2025 / 02 / 20',
      image: 'https://i.pinimg.com/736x/6e/28/4f/6e284fe96962fc6cff9d6fe14da79cc0.jpg', // Replace with your image URL
    },
    {
      name: 'Durban',
      date: '2025 / 03 / 25',
      image: 'https://i.pinimg.com/736x/eb/28/2e/eb282e94d832b53dcb315ca842221f9c.jpg', // Replace with your image URL
    },
  ];

  // State to track the selected card
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle card click
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index); // Toggle selection
  };

  // Handle search
  const handleSearch = () => {
    const searchTerm = document.getElementById('search-field').value;
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  // Handle hamburger menu click
  const handleHamburgerClick = () => {
    console.log('Hamburger menu clicked');
    // Add your hamburger menu logic here
  };

  return (
    <Container
      component="main"
      maxWidth={false} // Ensure the container takes full width
      sx={{
        backgroundImage: 'url(https://trello.com/1/cards/6786259a470356581cf02daa/attachments/67862798ba052a83bc51773f/download/wallpaper.jfif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Ensure the container takes full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        border: '5px solid #00BFFF', // Blue border
        padding: 0, // Remove default padding
        margin: 0, // Remove default margin
      }}
    >
      <CssBaseline />
      <AppBar position="static" sx={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="car" className="header-car-icon">🚗</span>
            We’ve got you for your next vacation
          </Typography>
          <IconButton onClick={handleHamburgerClick} sx={{ color: 'white' }}>
            <Typography variant="h6">☰</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5">Recent locations</Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {recentLocations.map((location, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  background: selectedCard === index ? 'rgba(0, 191, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)', // Scale up on hover
                  },
                }}
                onClick={() => handleCardClick(index)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={location.image} // Use the image URL from the array
                  alt={location.name}
                  className="card-media"
                />
                <CardContent>
                  <Typography variant="h6">
                    <span role="img" aria-label="location" className="location-icon">📍</span> {location.name}
                  </Typography>
                  <Typography variant="body2">
                    <span role="img" aria-label="calendar" className="calendar-icon">📅</span> {location.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <TextField
            id="search-field"
            variant="outlined"
            placeholder="Search with location name"
            sx={{ width: '300px', background: 'white' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <Typography variant="h6" className="search-icon">🔍</Typography>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
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
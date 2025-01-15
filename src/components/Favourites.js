import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  AppBar,
  Toolbar,
} from '@mui/material';
import './Favourites.css'; // Import the CSS file

const Favourites = () => {
  // Array of favorite locations with their respective details
  const favouriteLocations = [
    {
      name: 'Paris',
      date: '2025 / 04 / 10',
      image: 'https://i.pinimg.com/736x/b8/2e/33/b82e332473712b0f1b56b5b331970d5b.jpg', // Replace with your image URL
    },
    {
      name: 'Tokyo',
      date: '2025 / 05 / 15',
      image: 'https://i.pinimg.com/736x/99/a5/f2/99a5f20fdee57e12010f055840eda500.jpg', // Replace with your image URL
    },
    {
      name: 'New York',
      date: '2025 / 06 / 20',
      image: 'https://i.pinimg.com/736x/e2/cc/f8/e2ccf80e2349a3bb75ec75dba126238a.jpg', // Replace with your image URL
    },
  ];

  // State to track the selected card
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle card click
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index); // Toggle selection
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        background: 'linear-gradient(180deg, #1E3A8A 0%, #0F172A 100%)', // Gradient background
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        padding: 0,
        margin: 0,
      }}
    >
      <CssBaseline />
      <AppBar position="static" sx={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="car" className="header-car-icon">🚗</span>
            Favourites
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5">Your Favourite Locations</Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {favouriteLocations.map((location, index) => (
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
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                    <span role="img" aria-label="location" className="location-icon">📍</span> {location.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
                    <span role="img" aria-label="calendar" className="calendar-icon">📅</span> {location.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <footer>
        <Typography variant="body2" sx={{ mt: 4 }}>
          All rights reserved @2025
        </Typography>
      </footer>
    </Container>
  );
};

export default Favourites;
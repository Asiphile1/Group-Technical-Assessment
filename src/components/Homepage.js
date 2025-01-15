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
  Menu,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import { config } from 'dotenv'; // Import dotenv
import path from 'path'; // Import path
import './Homepage.css';

// Load environment variables from home.env
config({ path: path.resolve(__dirname, '../home.env') });

const Homepage = () => {
  const recentLocations = [
    {
      name: 'Johannesburg',
      date: '2025 / 01 / 14',
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      lat: -26.2041, // Latitude for Johannesburg
      lon: 28.0473, // Longitude for Johannesburg
    },
    {
      name: 'Cape Town',
      date: '2025 / 02 / 20',
      image: 'https://i.pinimg.com/736x/6e/28/4f/6e284fe96962fc6cff9d6fe14da79cc0.jpg',
      lat: -33.9249, // Latitude for Cape Town
      lon: 18.4241, // Longitude for Cape Town
    },
    {
      name: 'Durban',
      date: '2025 / 03 / 25',
      image: 'https://i.pinimg.com/736x/eb/28/2e/eb282e94d832b53dcb315ca842221f9c.jpg',
      lat: -29.8587, // Latitude for Durban
      lon: 31.0218, // Longitude for Durban
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  // Function to fetch weather data
  const getWeatherForecast = async (lat, lon) => {
    setIsLoading(true); // Show loader
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
      params: {
        lat: lat, // Latitude
        lon: lon, // Longitude
        units: 'metric', // Use metric units (Celsius)
        lang: 'en', // Language
      },
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY, // API key from .env
      },
    };

    try {
      const response = await axios.request(options);
      console.log('Weather Forecast:', response.data);
      setIsLoading(false); // Hide loader
      navigate('/weather', { state: { weatherData: response.data } }); // Navigate to WeatherScreen with data
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setIsLoading(false); // Hide loader
    }
  };

  // Handle card click
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
    const location = recentLocations[index];
    getWeatherForecast(location.lat, location.lon); // Fetch weather for the selected location
  };

  // Handle search
  const handleSearch = () => {
    const searchTerm = document.getElementById('search-field').value.trim();
    if (searchTerm) {
      // Simulate fetching coordinates for the searched location
      // For now, use a default location (e.g., New York)
      getWeatherForecast(40.7128, -74.0060); // Fetch weather for New York
    }
  };

  // Handle hamburger menu click
  const handleHamburgerClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        backgroundImage: 'url(https://trello.com/1/cards/6786259a470356581cf02daa/attachments/67862798ba052a83bc51773f/download/wallpaper.jfif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        border: '5px solid #00BFFF',
        padding: 0,
        margin: 0,
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
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">
              Login
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/favourites">
              Favourites
            </MenuItem>
          </Menu>
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
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => handleCardClick(index)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={location.image}
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
                  <IconButton onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? (
                      <CircularProgress size={24} sx={{ color: 'black' }} />
                    ) : (
                      <Typography variant="h6" className="search-icon">🔍</Typography>
                    )}
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
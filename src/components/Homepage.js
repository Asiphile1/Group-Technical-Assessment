import React, { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Grid, Card,
  CardMedia, CardContent, TextField, Box, CssBaseline,
  InputAdornment, IconButton, CircularProgress,
  Fade, Grow, Button, Avatar
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsSearch, BsCalendarDate } from 'react-icons/bs';
import { MdDirectionsCar } from 'react-icons/md';
import axios from 'axios';

const Homepage = () => {
  const recentLocations = [
    {
      name: 'Johannesburg',
      date: '2025 / 01 / 14',
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      description: 'Experience the vibrant culture and energy of South Africa\'s largest city'
    },
    {
      name: 'Cape Town',
      date: '2025 / 02 / 20',
      image: 'https://i.pinimg.com/736x/6e/28/4f/6e284fe96962fc6cff9d6fe14da79cc0.jpg',
      description: 'Discover the stunning coastline and Table Mountain views'
    },
    {
      name: 'Durban',
      date: '2025 / 03 / 25',
      image: 'https://i.pinimg.com/736x/eb/28/2e/eb282e94d832b53dcb315ca842221f9c.jpg',
      description: 'Enjoy the golden beaches and rich Indian influence'
    },
  ];

  // const getWeatherForecast = async () => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  //     params: {
  //       lat: '35.5', 
  //       lon: '-78.5',
  //       units: 'imperial', 
  //       lang: 'en', 
  //     },
  //     headers: {
  //       'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
  //       'x-rapidapi-key': '4b86d56e36msh29bc55cf4fa8a0ep13a0c6jsn64d193baccf5', 
  //     },
  //   };
  //   try {
  //     const response = await axios.request(options);
  //     console.log('Weather Forecast:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching weather data:', error);
  //   }
  // };
  
  // getWeatherForecast();

  const [selectedCard, setSelectedCard] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState([]);

  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  const handleSearch = async () => {
    if (searchText.trim()) {
      setIsLoading(true);
      try {
        const options = {
          method: 'GET',
          url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
          params: { city: searchText.trim(), units: 'imperial', lang: 'en' },
          headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key': '04b73da5f2mshf72d96c93d1455bp18c39bjsn38edcb4a66c0',
          },
        };
  
        const response = await axios.request(options);
        setWeatherForecast(response.data);
        navigate('/weather', { state: { location: searchText.trim(), weatherData: response.data } });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        sx={{ 
          background: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
          transition: 'background-color 0.3s ease',
          boxShadow: isScrolled ? 2 : 'none'
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
              <MdDirectionsCar size={24} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              VacationGo
            </Typography>
          </Box>
          <Button 
            color="inherit" 
            component={Link} 
            to="/login"
            sx={{ mr: 2 }}
          >
            Login
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to="/favourites"
          >
            Favorites
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/random/1920x1080/?travel)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          pt: 15,
          pb: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Discover Your Next Adventure
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Find the perfect weather for your dream destination
              </Typography>
              <TextField
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
                variant="outlined"
                placeholder="Where would you like to go?"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch} disabled={isLoading}>
                        {isLoading ? (
                          <CircularProgress size={24} color="primary" />
                        ) : (
                          <BsSearch size={20} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaMapMarkerAlt size={20} color="#666" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Fade>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              Popular Destinations
            </Typography>
            <Grid container spacing={4}>
              {recentLocations.map((location, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Grow in timeout={1000 * (index + 1)}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      }}
                      onClick={() => handleCardClick(index)}
                    >
                      <CardMedia
                        component="img"
                        height="240"
                        image={location.image}
                        alt={location.name}
                        sx={{
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h2" gutterBottom color="primary">
                          {location.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <BsCalendarDate size={16} style={{ marginRight: '8px' }} />
                          <Typography variant="body2" color="text.secondary">
                            {location.date}
                          </Typography>
                        </Box>
                        <Typography variant="body1">
                          {location.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.87)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Vacation Planner. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;
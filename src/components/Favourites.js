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
  Fade,
  Grow,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { MdFavorite, MdLocationOn, MdArrowBack } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';

const Favourites = () => {
  const favouriteLocations = [
    {
      name: 'Paris',
      date: '2025 / 04 / 10',
      image: 'https://i.pinimg.com/736x/b8/2e/33/b82e332473712b0f1b56b5b331970d5b.jpg',
      description: 'The City of Light awaits with its romantic charm and iconic landmarks',
    },
    {
      name: 'Tokyo',
      date: '2025 / 05 / 15',
      image: 'https://i.pinimg.com/736x/99/a5/f2/99a5f20fdee57e12010f055840eda500.jpg',
      description: 'Experience the perfect blend of tradition and modern innovation',
    },
    {
      name: 'New York',
      date: '2025 / 06 / 20',
      image: 'https://i.pinimg.com/736x/e2/cc/f8/e2ccf80e2349a3bb75ec75dba126238a.jpg',
      description: 'The city that never sleeps offers endless adventures',
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      
      <AppBar position="fixed" sx={{ 
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)'
      }}>
        <Toolbar>
          <IconButton 
            component={Link} 
            to="/"
            sx={{ color: 'white', mr: 2 }}
          >
            <MdArrowBack size={24} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MdFavorite size={24} color="#ff4081" />
              Favourites
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/random/1920x1080/?travel)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          pt: 12,
          pb: 8,
          flexGrow: 1,
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Your Favourite Locations
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={4}>
            {favouriteLocations.map((location, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Grow in timeout={1000 * (index + 1)}>
                  <Card
                    onClick={() => handleCardClick(index)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease-in-out',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
                      },
                    }}
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
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 1,
                        color: 'primary.main'
                      }}>
                        <MdLocationOn size={24} style={{ marginRight: '8px' }} />
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                          {location.name}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        color: 'text.secondary'
                      }}>
                        <BsCalendarDate size={16} style={{ marginRight: '8px' }} />
                        <Typography variant="body2">
                          {location.date}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {location.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
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
          textAlign: 'center'
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Favourites;
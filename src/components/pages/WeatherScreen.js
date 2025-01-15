import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  IconButton,
  Card,
  CardContent,
  Fade,
  LinearProgress,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiRain,
  WiThunderstorm,
} from 'react-icons/wi';

import {
  MdArrowBack,
  MdThermostat,
  MdWaterDrop,
  MdAir,
  MdVisibility,
  MdCompareArrows,
} from 'react-icons/md';

const WeatherScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: city, weatherData } = location.state;

  const currentWeather = {
    city: location.state?.location || "New York",
    country: "USA",
    temperature: 26,
    feelsLike: 28,
    maxTemp: 29,
    minTemp: 22,
    date: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    }),
    time: new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }),
    humidity: "19%",
    windSpeed: "14 km/h",
    visibility: "20 km",
    condition: "Sunny",
    days: [
      { day: 'Mon', temp: 26, icon: <WiDaySunny size={30} /> },
      { day: 'Tue', temp: 25, icon: <WiDayCloudy size={30} /> },
      { day: 'Wed', temp: 24, icon: <WiCloudy size={30} /> },
      { day: 'Thu', temp: 26, icon: <WiDaySunny size={30} /> },
      { day: 'Fri', temp: 23, icon: <WiRain size={30} /> },
      { day: 'Sat', temp: 22, icon: <WiThunderstorm size={30} /> },
      { day: 'Sun', temp: 25, icon: <WiDaySunny size={30} /> },
    ],
    currentDay: 2,
  };

  const handleBack = () => navigate('/');
  const handleActivities = () => navigate('/activities');

  return (
    <Box sx={{ 
      height: '100vh', 
      bgcolor: '#1a1a1a',
      overflow: 'hidden',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/random/1920x1080/?weather)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton sx={{ color: 'white' }} onClick={handleBack}>
            <MdArrowBack size={24} />
          </IconButton>
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {currentWeather.time}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {currentWeather.date}
              </Typography>
            </Box>
          </Fade>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              fontWeight: 600,
              '&:hover': { bgcolor: 'primary.dark' },
            }}
            onClick={handleActivities}
          >
            Activities
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ height: 'calc(100vh - 64px)', py: 2 }}>
        <Grid container spacing={3} sx={{ height: '100%' }}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              height: '100%',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white',
            }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                  {currentWeather.city}, {currentWeather.country}
                </Typography>
                <WiDaySunny size={120} style={{ margin: '20px 0' }} />
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {currentWeather.temperature}°C
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.9 }}>
                  {currentWeather.condition}
                </Typography>
                
                <Box sx={{ width: '100%', mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Temperature Range
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <MdCompareArrows size={24} />
                    <Box sx={{ flexGrow: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={((currentWeather.temperature - currentWeather.minTemp) / (currentWeather.maxTemp - currentWeather.minTemp)) * 100}
                        sx={{ 
                          height: 10, 
                          borderRadius: 5,
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: 'primary.main',
                          }
                        }}
                      />
                    </Box>
                    <Typography>
                      {currentWeather.minTemp}°C - {currentWeather.maxTemp}°C
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Weather Stats */}
            <Grid container spacing={2}>
              {[
                { icon: <MdThermostat size={24} />, label: 'Feels Like', value: `${currentWeather.feelsLike}°C` },
                { icon: <MdWaterDrop size={24} />, label: 'Humidity', value: currentWeather.humidity },
                { icon: <MdAir size={24} />, label: 'Wind Speed', value: currentWeather.windSpeed },
                { icon: <MdVisibility size={24} />, label: 'Visibility', value: currentWeather.visibility },
              ].map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Card sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)' }
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 2 }}>
                      <Box sx={{ mb: 1 }}>{item.icon}</Box>
                      <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="h6">
                        {item.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* 7-Day Forecast */}
            <Card sx={{ 
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              flexGrow: 1,
            }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  7-Day Forecast
                </Typography>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                  {currentWeather.days.map((day, index) => (
                    <Grid item xs key={index}>
                      <Box sx={{
                        textAlign: 'center',
                        p: 1,
                        borderRadius: 1,
                        bgcolor: index === currentWeather.currentDay ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      }}>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          {day.day}
                        </Typography>
                        <Box sx={{ my: 1 }}>
                          {day.icon}
                        </Box>
                        <Typography variant="body1">
                          {day.temp}°C
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WeatherScreen;
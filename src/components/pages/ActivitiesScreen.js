import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Chip,
  Grow,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const ActivitiesScreen = () => {
  const navigate = useNavigate();

  const activities = [
    {
      name: "Swimming",
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
      rating: 4.8,
      price: "$30",
      location: "Central Beach"
    },
    {
      name: "Hot Air Ballooning",
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      schedule: "Mon - Sat",
      time: "06:00 - 10:00",
      rating: 4.9,
      price: "$200",
      location: "Sky Valley"
    },
    {
      name: "Sightseeing",
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      schedule: "Mon - Sun",
      time: "09:00 - 18:00",
      rating: 4.7,
      price: "$45",
      location: "City Center"
    },
    {
      name: "Camping",
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      schedule: "Mon - Sun",
      time: "24/7",
      rating: 4.6,
      price: "$50",
      location: "Pine Forest"
    },
    {
      name: "Hiking",
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      schedule: "Mon - Sun",
      time: "06:00 - 17:00",
      rating: 4.8,
      price: "$25",
      location: "Mountain Trail"
    },
    {
      name: "Beach Relaxation",
      image: 'https://i.pinimg.com/736x/f0/bf/0c/f0bf0cbbd9865a91d3e2ea5e7cbfcff3.jpg',
      schedule: "Mon - Sun",
      time: "08:00 - 18:00",
      rating: 4.7,
      price: "$20",
      location: "Paradise Beach"
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handleCardClick = (activity) => {
    navigate("/destiny", { state: { activity } });
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#121212',
      color: 'white',
    }}>
      <AppBar position="static" sx={{ 
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={handleBack}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              New York, USA
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            px: 2,
            py: 0.5,
          }}>
            <Typography variant="h6" sx={{ mr: 1 }}>26°C</Typography>
            <WbSunnyIcon sx={{ color: '#FFD700' }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ 
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          mb: 4
        }}>
          Recommended Activities
          <Chip 
            label="Perfect Weather" 
            sx={{ 
              ml: 2,
              bgcolor: '#4CAF50',
              color: 'white'
            }} 
          />
        </Typography>

        <Grid container spacing={3}>
          {activities.map((activity, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow in timeout={500 * (index + 1)}>
                <Card 
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.05)',
                      }
                    },
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                  onClick={() => handleCardClick(activity)}
                >
                  <Box sx={{ overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={activity.image}
                      alt={activity.name}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <Chip
                    label={activity.price}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 'bold',
                      boxShadow: 2,
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom color='#fff'>
                      {activity.name}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        size="small"
                        icon={<LocationOnIcon />}
                        label={activity.location}
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          mb: 1
                        }}
                      />
                    </Box>
                    <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', my: 1 }} />
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarTodayIcon sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                          <Typography variant="body2" sx={{ opacity: 0.7 }} color='#fff'>
                            {activity.schedule}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                          <Typography variant="body2" sx={{ opacity: 0.7 }} color='#fff'>
                            {activity.time}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ActivitiesScreen;
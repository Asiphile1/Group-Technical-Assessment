import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";

const WeatherScreen = () => {
  // Dummy data for current weather
  const currentWeather = {
    city: "New York",
    country: "USA",
    temperature: 26,
    date: "14 January 2025",
    time: "16:30:34",
    humidity: "19%",
    windSpeed: "14 km/h",
    condition: "Sunny",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    currentDay: 2, // Index of the current day (0 for Monday, etc.)
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: "url(/assets/weather-background.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        padding: 0,
      }}
    >
      {/* Top Navbar */}
      <AppBar
        position="static"
        sx={{
          background: "rgba(0, 0, 0, 0.5)",
          boxShadow: "none",
          padding: "50px",
         
          
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">{currentWeather.time}</Typography>
            <Typography variant="body2">{currentWeather.date}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5">{currentWeather.temperature}°C</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ADFF2F",
                color: "black",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#9ACD32",
                },
              }}
            >
              Activities
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Weather Details */}
      <Box
        sx={{
          overflowX: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          background: "rgba(0, 0, 0, 0.5)",
          boxShadow: "none",
          height: "60%"
        }}
      >
        <WbSunnyIcon sx={{ fontSize: "60px", color: "orange" }} />
        <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
          {currentWeather.condition.toUpperCase()}
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <Box>
              <InvertColorsIcon />
              <Typography variant="body2">{currentWeather.humidity}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <AirIcon />
              <Typography variant="body2">
                {currentWeather.windSpeed}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Timeline and City */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px" }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          {currentWeather.city}, {currentWeather.country}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <Grid container justifyContent="space-between">
              {currentWeather.days.map((day, index) => (
                <Grid item key={index}>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentWeather.currentDay
                          ? "#ADFF2F"
                          : "white",
                      margin: "5px auto",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        index === currentWeather.currentDay
                          ? "#ADFF2F"
                          : "white",
                    }}
                  >
                    {day}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <IconButton sx={{ color: "white" }}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default WeatherScreen;

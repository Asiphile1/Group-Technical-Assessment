import React from "react";
import { Container, Typography } from "@mui/material";

const WeatherScreen = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Weather Details
      </Typography>
      <Typography variant="body1">
        Explore weather forecasts for your selected locations.
      </Typography>
    </Container>
  );
};

export default WeatherScreen;

import React from "react";
import { Container, Typography } from "@mui/material";

const ActivitiesScreen = () => {
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
        Activities
      </Typography>
      <Typography variant="body1">
        Discover exciting activities at your travel destinations.
      </Typography>
    </Container>
  );
};

export default ActivitiesScreen;

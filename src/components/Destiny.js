import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";

const Destiny = () => {
  const location = useLocation();
  const activity = location.state?.activity;

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        backgroundColor: "#1c1c1c",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <AppBar position="static" sx={{ background: "black", boxShadow: "none" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {activity?.name || "Destination"}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5">{activity?.name || "Activity Details"}</Typography>
        <Typography variant="body1">{activity?.schedule}</Typography>
        <Typography variant="body1">{activity?.time}</Typography>
      </Box>
    </Container>
  );
};

export default Destiny;







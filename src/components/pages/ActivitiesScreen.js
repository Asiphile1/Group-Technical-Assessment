import React from "react";
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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import "./ActivitiesScreen.css";

const ActivitiesScreen = () => {
  const activities = [
    {
      name: "Swimming",
      image: "/assets/activity-swimming.jpg",
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
    },
    {
      name: "Hot Air Ballooning",
      image: "/assets/activity-balloon.jpg",
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
    },
    {
      name: "Sightseeing",
      image: "/assets/activity-sightseeing.jpg",
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
    },
    {
      name: "Camping",
      image: "/assets/activity-camping.jpg",
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
    },
    {
      name: "Hiking",
      image: "/assets/activity-hiking.jpg",
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
    },
    {
      name: "Beach Relaxation",
      image: "/assets/activity-beach.jpg",
      schedule: "Mon - Sat",
      time: "08:00 - 19:00",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ background: "black", borderBottom: "1px solid lime" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ marginRight: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            New York USA
          </Typography>
          <Typography variant="h6">26 C</Typography>
          <WbSunnyIcon sx={{ color: "yellow", marginLeft: 1 }} />
          <Typography sx={{ color: "yellow", marginLeft: 0.5 }}>
            Sunny
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Title */}
      <Box sx={{ padding: 2, borderBottom: "1px solid gray" }}>
        <Typography variant="h6">Activities</Typography>
      </Box>

      {/* Activity Cards */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ background: "#121212", color: "white" }}>
              <CardMedia
                component="img"
                height="140"
                image={activity.image}
                alt={activity.name}
              />
              <CardContent>
                <Typography variant="h6">{activity.name}</Typography>
                <Typography variant="body2">{activity.schedule}</Typography>
                <Typography variant="body2">{activity.time}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActivitiesScreen;

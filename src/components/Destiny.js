import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox GL CSS
import './Destiny.css'; // Ensure this path is correct

const Destiny = () => {
  const mapContainerStyle = {
    height: "300px",
    width: "100%",
    borderRadius: "8px",
  };

  const [viewport, setViewport] = React.useState({
    latitude: 40.7128, // Latitude for New York
    longitude: -74.0060, // Longitude for New York
    zoom: 12,
    width: '100%',
    height: '300px',
  });
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
        <Typography variant="h5">Eyeseeing</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://trello.com/1/cards/6786259a470356581cf02daa/attachments/678671b84def309eaa8f5fbc/download/sightseeing.jfif" // Replace with your image URL
                alt="Eyeseeing 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://trello.com/1/cards/6786259a470356581cf02daa/attachments/678671b85fca9a22e6f5d938/download/takePhotos.jfif" // Replace with your image URL
                alt="Eyeseeing 2"
              />
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">Eyeseeing</Typography>
          <Typography variant="body2">
            <span role="img" aria-label="clock">🕒</span> Mon - Sat: 08:00 - 19:00
          </Typography>
          <Typography variant="body2">
            <span role="img" aria-label="age">👶</span> Children under the age of 3 not allowed
          </Typography>
          <Typography variant="body2">
            <span role="img" aria-label="bottle">🚫</span> Bottles not allowed, bring only cans
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Map</Typography>
          <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11" // Mapbox style URL
            onViewportChange={setViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // Access token from .env
          >
            <Marker latitude={40.7128} longitude={-74.0060}>
              <div style={{ color: 'red', fontSize: '24px' }}>📍</div>
            </Marker>
          </ReactMapGL>
        </Box>

        <Typography variant="h5">{activity?.name || "Activity Details"}</Typography>
        <Typography variant="body1">{activity?.schedule}</Typography>
        <Typography variant="body1">{activity?.time}</Typography>
      </Box>
    </Container>
  );
};

export default Destiny;













// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   Box,
//   IconButton,
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import "./Destiny.css"; // Ensure this path is correct

// const Destiny = () => {
//   const mapContainerStyle = {
//     height: "300px",
//     width: "100%",
//     borderRadius: "8px",
//   };

//   const center = {
//     lat: 40.7128, // Latitude for New York
//     lng: -74.006, // Longitude for New York
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="lg"
//       sx={{
//         backgroundColor: "#1c1c1c",
//         color: "white",
//         padding: "20px",
//         borderRadius: "8px",
//       }}
//     >
//       <AppBar position="static" sx={{ background: "black", boxShadow: "none" }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="back">
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             New York USA
//           </Typography>
//           <Typography variant="h6">26 °C</Typography>
//           <WbSunnyIcon sx={{ color: "yellow", marginLeft: "10px" }} />
//         </Toolbar>
//       </AppBar>

//       <Box sx={{ mt: 2 }}>
//         <Typography variant="h5">Eyeseeing</Typography>
//         <Grid container spacing={2} sx={{ mt: 2 }}>
//           <Grid item xs={12} sm={6}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image="https://trello.com/1/cards/6786259a470356581cf02daa/attachments/678671b84def309eaa8f5fbc/download/sightseeing.jfif" // Replace with your image URL
//                 alt="Eyeseeing 1"
//               />
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image="https://trello.com/1/cards/6786259a470356581cf02daa/attachments/678671b85fca9a22e6f5d938/download/takePhotos.jfif" // Replace with your image URL
//                 alt="Eyeseeing 2"
//               />
//             </Card>
//           </Grid>
//         </Grid>

//         <Box sx={{ mt: 2 }}>
//           <Typography variant="body1">Eyeseeing</Typography>
//           <Typography variant="body2">
//             <span role="img" aria-label="clock">
//               🕒
//             </span>{" "}
//             Mon - Sat: 08:00 - 19:00
//           </Typography>
//           <Typography variant="body2">
//             <span role="img" aria-label="age">
//               👶
//             </span>{" "}
//             Children under the age of 3 not allowed
//           </Typography>
//           <Typography variant="body2">
//             <span role="img" aria-label="bottle">
//               🚫
//             </span>{" "}
//             Bottles not allowed, bring only cans
//           </Typography>
//         </Box>

//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6">Map</Typography>
//           <LoadScript googleMapsApiKey="YOUR_API_KEY">
//             {" "}
//             {/* Replace with Google Maps API key */}
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={center}
//               zoom={12}
//             >
//               <Marker position={center} />
//             </GoogleMap>
//           </LoadScript>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Destiny;

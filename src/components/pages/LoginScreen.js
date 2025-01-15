import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const LoginScreen = () => {
  return (
    <Container
      maxWidth={false} // Allows the container to span the full width
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full viewport height
        width: "100%", // Full viewport width
        backgroundColor: "black", // Black background
        color: "white", // White text
        margin: 0,
        padding: 0,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form" sx={{ width: "100%", mt: 2 }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              backgroundColor: "black", // Black input field
              color: "white", // White text
            },
          }}
          InputLabelProps={{
            style: {
              color: "white", // White label
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              backgroundColor: "black", // Black input field
              color: "white", // White text
            },
          }}
          InputLabelProps={{
            style: {
              color: "white", // White label
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            color: "blue", // Blue text
            backgroundColor: "white", // White button background
            "&:hover": {
              backgroundColor: "#e0e0e0", // Light gray on hover
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginScreen;

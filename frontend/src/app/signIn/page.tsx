"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Container, Card, CardContent, Grid } from "@mui/material";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/login_page/Background Image.svg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {/* Left Side: Login Form */}
          <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ width: "100%", maxWidth: "500px", backgroundColor: "#023047", borderRadius: "8px", padding: 3 }}>
              <CardContent sx={{ backgroundColor: "#023047" }}>
                <Typography variant="h5" gutterBottom color="white" align="center">
                  Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"  
                    sx={{
                      input: { color: "white" },
                      label: { color: "white" },
                      '& .MuiInputBase-root': {
                        backgroundColor: 'transparent',  
                      }
                    }}
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"  
                    sx={{
                      input: { color: "white" },
                      label: { color: "white" },
                      '& .MuiInputBase-root': {
                        backgroundColor: 'transparent',  
                      }
                    }}
                  />
                  <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2, backgroundColor: "white", color: "#2148C0" }}>
                    Login
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side: Image */}
          <Grid
            item
            xs={12}
            md={5}  
            sx={{
              backgroundImage: "url('/login_page/Crickter Image.svg')", 
              backgroundSize: "contain", 
              backgroundPosition: "center",
              height: "80vh",  
              borderRadius: "8px",
              backgroundRepeat: "no-repeat"
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
}

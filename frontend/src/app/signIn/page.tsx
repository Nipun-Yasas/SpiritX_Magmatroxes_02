"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Container, Card, CardContent, Grid, Link, LinearProgress } from "@mui/material";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; password?: string; confirmPassword?: string }>({});
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const validatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;
    return strength;
  };

  const getPasswordStrengthLabel = (strength: number) => {
    if (strength <= 2) return { label: "Weak", color: "red", progress: 30 };
    if (strength === 3) return { label: "Medium", color: "orange", progress: 60 };
    return { label: "Strong", color: "green", progress: 100 };
  };

  const validate = () => {
    let newErrors: { username?: string; password?: string; confirmPassword?: string } = {};
    if (username.length < 8) newErrors.username = "Username must be at least 8 characters";
    if (validatePasswordStrength(password) < 5)
      newErrors.password = "Password must be 8+ characters with uppercase, lowercase, number & special character";
    if (isSignup && confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      console.log(isSignup ? "Signup Successful" : "Login Successful", { username, password });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setShowPasswordStrength(value.length > 0); // Show only when typing
  };

  const handlePasswordBlur = () => {
    setTimeout(() => setShowPasswordStrength(false), 200); // Delay hiding to allow clicking the next field
  };

  const passwordStrength = getPasswordStrengthLabel(validatePasswordStrength(password));

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
          {/* Left Side: Auth Form */}
          <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ width: "100%", maxWidth: "500px", backgroundColor: "#023047", borderRadius: "8px", padding: 3 }}>
              <CardContent sx={{ backgroundColor: "#023047" }}>
                <Typography variant="h5" gutterBottom color="white" align="center">
                  {isSignup ? "Sign Up" : "Login"}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Username Field */}
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                    error={!!errors.username}
                    helperText={errors.username}
                    sx={{
                      input: { color: "white" },
                      '& .MuiInputBase-root': { backgroundColor: "transparent", border: "1px solid white" },
                    }}
                  />

                  {/* Password Field */}
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur} // Hide password strength on blur with slight delay
                    required
                    placeholder="Password"
                    error={!!errors.password}
                    helperText={errors.password}
                    sx={{
                      input: { color: "white" },
                      '& .MuiInputBase-root': { backgroundColor: "transparent", border: "1px solid white" },
                    }}
                  />

                  {/* Password Strength Indicator (Properly Positioned Below Password Field) */}
                  {isSignup && showPasswordStrength && (
                    <Box sx={{ position: "relative", marginBottom: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={passwordStrength.progress}
                        sx={{
                          height: 6,
                          borderRadius: 5,
                          backgroundColor: "gray",
                          '& .MuiLinearProgress-bar': { backgroundColor: passwordStrength.color },
                        }}
                      />
                      <Typography variant="body2" color={passwordStrength.color} align="center">
                        {passwordStrength.label}
                      </Typography>
                    </Box>
                  )}

                  {/* Confirm Password Field (Signup Only) */}
                  {isSignup && (
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Confirm Password"
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword}
                      sx={{
                        input: { color: "white" },
                        '& .MuiInputBase-root': { backgroundColor: "transparent", border: "1px solid white" },
                      }}
                    />
                  )}

                  <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2, backgroundColor: "white", color: "#2148C0" }}>
                    {isSignup ? "Sign Up" : "Login"}
                  </Button>
                </Box>
                <Typography variant="body2" align="center" color="white" sx={{ marginTop: 2 }}>
                  {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                  <Link
                    component="button"
                    onClick={() => {
                      setIsSignup(!isSignup);
                      setErrors({});
                      setShowPasswordStrength(false); // Hide password strength when switching forms
                      setPassword("");
                      setConfirmPassword("");
                    }}
                    sx={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
                  >
                    {isSignup ? "Login" : "Sign Up"}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side: Image */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              backgroundImage: "url('/login_page/Crickter Image.svg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "80vh",
              borderRadius: "8px",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
}

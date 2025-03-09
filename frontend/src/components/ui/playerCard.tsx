"use client";

import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

export default function PlayerCard() {
  return (
    <Card
      sx={{
        width: 200,
        height: 250,
        backgroundColor: "#012A4A",
        color: "white",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #FFB703",
      }}
    >
      <CardContent>
        <Avatar
          src="/dashboard/profile_pic.svg" 
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <Typography variant="h6" align="center">
          Jehan Pinto
        </Typography>
      </CardContent>
    </Card>
  );
}

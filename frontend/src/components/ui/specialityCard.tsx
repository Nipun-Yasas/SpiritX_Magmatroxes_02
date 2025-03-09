"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface SpecialtyCardProps {
  title: string;
  progress: string;
}

export default function SpecialtyCard({ title, progress }: SpecialtyCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        width: 180,
        height: 60,
        padding: "8px",
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          backgroundColor: "#FFB703",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 1,
        }}
      >
        <StarIcon sx={{ color: "white" }} />
      </Box>
      <CardContent sx={{ padding: 0, marginTop: 3 }}>
        <Typography variant="body2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="caption">{progress} Completed</Typography>
      </CardContent>
    </Card>
  );
}

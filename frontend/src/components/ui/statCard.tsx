"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import { EmojiEvents, History, AccessTime } from "@mui/icons-material";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export default function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <Card
      sx={{
        width: 150,
        height: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        backgroundColor: color,
        color: "white",
      }}
    >
      <Box sx={{ fontSize: 30 }}>{icon}</Box>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="h6" fontWeight="bold">
        {value}
      </Typography>
    </Card>
  );
}

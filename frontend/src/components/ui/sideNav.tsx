"use client";

import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { Home, Apps, SportsEsports, CardGiftcard, Computer, ShoppingCart, History } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 60,
          backgroundColor: "#023047", 
          color: "white",
          display: "flex",
          alignItems: "center",
          paddingTop: 10,
        },
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}> 
        {[
          { icon: <Home />, href: "/" },
          { icon: <Apps />, href: "/dashboard", active: true },
          { icon: <SportsEsports />, href: "/games" },
          { icon: <CardGiftcard />, href: "/gifts" },
          { icon: <Computer />, href: "/tech" },
          { icon: <ShoppingCart />, href: "/cart" },
          { icon: <History />, href: "/history" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding sx={{ marginBottom: 1.5 }}> {/* Increased spacing */}
            <ListItemButton
              sx={{
                justifyContent: "center",
                borderRadius: 2,
                backgroundColor: item.active ? "#026896" : "transparent", 
                "&:hover": { backgroundColor: "#0288D1" },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 0 }}>
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

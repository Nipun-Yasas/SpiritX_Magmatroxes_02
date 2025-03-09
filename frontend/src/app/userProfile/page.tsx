import Sidebar from "@/components/ui/sideNav";
import Navbar from "@/components/navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import PlayerCard from "@/components/ui/playerCard";
import SpecialtyCard from "@/components/ui/specialityCard";
import StatCard from "@/components/ui/statCard";
import { History, EmojiEvents, AccessTime } from "@mui/icons-material"; // ✅ Import the missing icons

export default function Home() {
  return (
    <div>
      <div className="pl-10">
      <Navbar />
      </div>
      <Sidebar />
      

      <div className="pl-15 bg-[url('/background.svg')] bg-cover bg-center h-screen w-full">

      <Box sx={{ padding: 3, marginLeft: "60px", marginTop: "0px" }}>
        {/* Top Section */}
        <Grid container spacing={3} alignItems="center">
          {/* Player Info */}
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <PlayerCard />
          </Grid>

          {/* Introduction */}
          <Grid item xs={12} sm={5}>
            <Typography variant="h4" fontWeight="bold" color="white">
              Meet, Jehan!
            </Typography>
            <Typography variant="body1" color="white" sx={{ marginTop: 1 }}>
              With over 10 years of playing experience at both national and international levels,
              Jehan has built a strong reputation in the cricket world.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: "white",
                color: "#012A4A",
                "&:hover": { backgroundColor: "#FFB703", color: "white" },
              }}
            >
              Select Me
            </Button>
          </Grid>

          {/* Specialty Cards */}
          <Grid item xs={15} sm={3} display="flex" flexDirection="column" gap={3} marginTop={5}>
            <SpecialtyCard title="Specialty 1" progress="2/8" />
            <SpecialtyCard title="Specialty 2" progress="3/8" />
            <SpecialtyCard title="Specialty 3" progress="5/8" />
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ marginY: 12, borderBottom: "1px solid white" }} />

        {/* Stats Cards */}
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <StatCard title="Member Since" value="2019" icon={<History />} color="#FF8500" />
          </Grid>
          <Grid item>
            <StatCard title="Winning Rate" value="85%" icon={<EmojiEvents />} color="#212121" />
          </Grid>
          <Grid item>
            <StatCard title="Playing Hours" value="49" icon={<AccessTime />} color="#FF8500" />
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
}

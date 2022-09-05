import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="/road.jpg" alt="Road" width={"100%"} height="70%" />
      <Typography
        fontFamily={"Dancing Script,cursive"}
        variant="h3"
        fontWeight="bold"
        textAlign={"center"}
        width="100%"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          background: "#B2C8DF",
        }}
      >
        Dare to live the life you've always wanted
      </Typography>
      <Box width="100%" height="30%" display={"flex"} flexDirection="column">
        <Typography
          fontFamily={"quicksand"}
          textAlign={"center"}
          variant="h4"
          padding={4}
        >
          SHARE YOUR TRAVEL DIARIES WITH US
        </Typography>
        <Box margin="auto">
          <Button variant="outlined" sx={{ mr: 2 }}>
            Share Your Story
          </Button>
          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{ ml: 2 }}
          >
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

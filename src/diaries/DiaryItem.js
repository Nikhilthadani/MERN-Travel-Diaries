import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import React from "react";

const DiaryItem = () => {
  return (
    <Card
      sx={{
        width: "50%",
        height: "60vh",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon />}
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        header="NEW DELHI"
        subheader="September 14, 2016"
      />

      <img
        height="194"
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          This impressive paella
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography width="170px" fontWeight={"bold"} variant="caption">
            Nikhil Thadani:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DiaryItem;

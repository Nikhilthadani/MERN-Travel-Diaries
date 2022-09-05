import { Box } from "@mui/system";
import React from "react";
import DiaryItem from "./DiaryItem";

const Diaries = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {" "}
      {[1, 2, 3, 4, 5].map((item) => (
        <DiaryItem key={item} />
      ))}
    </Box>
  );
};

export default Diaries;

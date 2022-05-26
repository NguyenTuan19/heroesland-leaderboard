import React from "react";
import { Box } from "@mui/material";

function NoDataDetail() {
  return (
    <Box
      className="flex p-2 h-full"
      sx={{
        border: "1px solid #8F00FF",
        borderRadius: "15px",
        background: "#1E193B",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box className="w-1/2" sx={{ borderRight: "1px solid #8F00FF" }}></Box>
      <Box className="w-1/2"></Box>
    </Box>
  );
}

export default NoDataDetail;

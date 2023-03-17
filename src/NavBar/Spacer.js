import { Box } from "@mui/system";
import React from "react";

const Spacer = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-end",
    }}
  >
    <Box
      sx={{
        minHeight: "48px",
        background: "linear-gradient(#84878C, #505155)",
        minWidth: "30em",
      }}
    />
  </Box>
);

export default Spacer;

import { Box, Typography } from "@mui/material";

const Unauthorized = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ color: "red" }}>
        Unauthorized
      </Typography>
      <Typography sx={{ color: "red" }}>
        Please contact Ram Alloys Admin for support.
      </Typography>
    </Box>
  );
};

export default Unauthorized;

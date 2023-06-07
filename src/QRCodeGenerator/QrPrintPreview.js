import { Box, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import React from "react";
import { useParams } from "react-router-dom";

export default React.forwardRef(({ orderId, ...props }, ref) => {
  const { orderId: id } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
      }}
      ref={ref}
      {...props}
    >
      <Typography variant="p1">{` ${orderId ?? id}`}</Typography>
      <QRCode
        size={200}
        value={`${window.location.origin}/order/${orderId ?? id}`}
      />
    </Box>
  );
});

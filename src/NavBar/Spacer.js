import { Box } from "@mui/system";
import React from "react";

const Spacer = ({ sx, ItemProps, ...props }) => {
  const { sx: itemSx, ...itemProps } = ItemProps ?? {};

  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: "flex-end",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Box
        sx={[
          {
            minHeight: "48px",
            background: "linear-gradient(#84878C, #505155)",
            minWidth: "30em",
          },
          ...(Array.isArray(itemSx) ? itemSx : [itemSx]),
        ]}
        {...itemProps}
      />
    </Box>
  );
};

export default Spacer;

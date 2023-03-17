import React from "react";
import Button from "@mui/material/Button";

export default ({ sx = [], ...props }) => {
  return (
    <Button
      sx={[
        {
          color: "white",
          minWidth: "135px",
          height: "50px",
          display: "inline-flexbox",
          background: "linear-gradient(to bottom,  #555758 0%,#3d3e3f 100%)",
          fontSize: "14px",
          border: "2px solid",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

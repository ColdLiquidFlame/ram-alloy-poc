import { TextField } from "@mui/material";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import Button from "./Shared/Button";
import { Box } from "@mui/system";

const QRCodeGenerator = () => {
  const [value, setValue] = useState("");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        style={{
          backgroundColor: "#e0e2e4",
          marginBottom: 20,
          width: "200px",
        }}
        id="standard-basic"
        label="Order Id"
        sx={{
          color: "primary",
          boxShadow: "inset 0px 2px 2px 0px rgb(0 0 0 / 65%)",
          "& .MuiFilledInput-root::before, & .MuiFilledInput-root::after": {
            border: 0,
          },
          "& > .MuiFormLabel-root.Mui-focused": {
            color: "#848586",
          },
        }}
        value={value}
        variant="filled"
        onChange={(e) => setValue(e.target.value)}
      />
      <QRCode size={200} value={`${window.location.origin}/order/${value}`} />
      {value && (
        <Button sx={{ width: "200px" }} type="button">
          Download Cover Sheet
        </Button>
      )}
    </Box>
  );
};

export default QRCodeGenerator;

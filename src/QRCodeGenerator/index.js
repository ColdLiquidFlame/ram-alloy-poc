import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
import Button from "../Shared/Button";
import { Box } from "@mui/system";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import OrderTrackingService from "../Services/OrderTracking";
import { useReactToPrint } from "react-to-print";
import QrPrintPreview from "./QrPrintPreview";

const QRCodeGenerator = () => {
  const { user } = useAuthenticatedUser();
  const [orderId, setOrderId] = useState("");
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const handleButtonClick = async () => {
    await OrderTrackingService.saveOrder({ orderId, user });
    handlePrint();
  };

  const ref = useRef();

  return (
    <>
      <Box sx={{ display: "none" }}>
        <QrPrintPreview ref={ref} orderId={orderId} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          value={orderId}
          variant="filled"
          onChange={(e) => setOrderId(e.target.value)}
        />
        <QRCode
          size={200}
          value={`${window.location.origin}/order/${orderId}`}
        />
        {orderId && (
          <Button
            sx={{ width: "200px" }}
            type="button"
            onClick={handleButtonClick}
          >
            Download Cover Sheet
          </Button>
        )}
      </Box>
    </>
  );
};

export default QRCodeGenerator;

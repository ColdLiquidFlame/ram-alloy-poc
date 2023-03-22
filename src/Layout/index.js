import "../main.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../Dashboard";
import Navbar from "../NavBar";
import Orders from "../Order/Orders";
import View from "../Order/View";
import QRCodeGenerator from "../QRCodeGenerator";
import Redirect from "../Redirect";
import QrPrintPreview from "../QRCodeGenerator/QrPrintPreview";

const Layout = () => {
  const { isLoading } = useAuth0();

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          padding: "1em",
          height: "100%",
        }}
      >
        {isLoading ? (
          <Redirect />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/qr" element={<QRCodeGenerator />} />
            <Route path="/order/:orderId" element={<Orders />} />
            <Route path="/order/:orderId/view" element={<View />} />
            <Route path="/order/:orderId/Pdf" element={<QrPrintPreview />} />
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
        )}
      </Box>
    </Box>
  );
};

export default Layout;

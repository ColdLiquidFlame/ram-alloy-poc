import { Stack, Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "../Dashboard";
import QRCodeGenerator from "../QRCodeGenerator";
import Orders from "../Orders";

const Layout = () => {
  return (
    <Stack>
      <Paper>
        <Navbar />
      </Paper>
      <Paper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/qr" element={<QRCodeGenerator />} />
          <Route path="/order/:orderId" element={<Orders />} />
        </Routes>
      </Paper>
    </Stack>
  );
};

export default Layout;

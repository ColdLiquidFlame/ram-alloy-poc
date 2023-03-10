import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import '../main.css'
import logo from './Logo.png';
import React from 'react';
import Navbar from "./Navbar";
import Dashboard from "../Dashboard";
import QRCodeGenerator from "../QRCodeGenerator";
import Orders from "../Orders";
const Layout = () => {
  return (
    <div className="top">
      <img alt="" src={logo}/>
        <div className="content">
          <Paper>
            <Navbar />
          </Paper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/qr" element={<QRCodeGenerator />} />
            <Route path="/order/:orderId" element={<Orders />} />
          </Routes>
        </div>  
    </div>
  );
};

export default Layout;

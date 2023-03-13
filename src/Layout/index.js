import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import '../main.css'
import logo from './Logo.png';
import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Dashboard from "../Dashboard";
import QRCodeGenerator from "../QRCodeGenerator";
import Orders from "../Orders";
const Layout = () => {
  return (
    <div class="flexbox-container">
        <div class="flexbox-item top">
          <div class="flexbox-item secondtop">
            <div className="flexbox-item content">
              <img alt="" src={logo}/>
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
        </div>  
    </div>
  );
};

export default Layout;

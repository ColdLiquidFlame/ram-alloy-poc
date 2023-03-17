import "../main.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import logo from './Logo.png';
import React from 'react';
import Navbar from "./Navbar";
import Footer from "../Footer";
import Dashboard from "../Dashboard";
import Navbar from "../NavBar";
import Orders from "../Order/Orders";
import View from "../Order/View";
import QRCodeGenerator from "../QRCodeGenerator";
import Redirect from "../Redirect";

import Orders from "../Orders";
import View from "../Order/View";

const styles = {
  flexboxContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  flexboxItem:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center'
  },
  top:{
    borderTop: '14px solid #1d2125',
    backgroundColor: 'red'
  },
  seconttop:{
    height: '40px',
    backgroundColor: 'lightgrey'
  },
  content:{
    background: 'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
    backgroundSize: 'cover',
  },
  img:{
    overflow:'hidden'
  },
  
}
const Layout = () => {
  const { isLoading } = useAuth0();

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          padding: "1em 30em",
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
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
        )}
      </Box>
    </Box>
  );
};

export default Layout;

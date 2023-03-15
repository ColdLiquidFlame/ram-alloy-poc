import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// import '../main.css'
import logo from './Logo.png';
import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Dashboard from "../Dashboard";
import QRCodeGenerator from "../QRCodeGenerator";
import Orders from "../Orders";
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
    backgroundColor: 'white'
  },
  seconttop:{
    height: '40px',
    backgroundColor: 'lightgray'
  },
  content:{
    background: 'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)'
  }
}
const Layout = () => {
  return (
    <div class="flexboxContainer" style={styles.flexboxContainer}>
      <div class='flexboxItem' style={styles.flexboxItem}>
        <div class="flexboxItem top" style={styles.flexboxItem.top}>
          <div class="flexboxItem secondtop" style={styles.flexboxItem.seconttop}>
            <div className="flexboxItem content" style={styles.content}>
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
 
    </div>
  );
};

export default Layout;

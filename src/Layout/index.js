import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// import '../main.css'
import logo from './Logo.png';
import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Footer from "../Footer";
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
  return (
    <div class="flexboxContainer" style={styles.flexboxContainer}>
      <div class='flexboxItem' style={styles.flexboxItem}>
        <div class="flexboxItem top" style={styles.top}>
          <div class="flexboxItem secondtop" style={styles.seconttop}>
            <img alt="logo" class="img" style={styles.img} src={logo}/>
            
                <Paper>
                  <Navbar />
                </Paper>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/qr" element={<QRCodeGenerator />} />
                  <Route path="/order/:orderId" element={<Orders />} />
                </Routes>
                <div className="footer" style={styles.footer}>
                <Paper>
                  <Footer />
                </Paper>
            </div>
          </div>
        </div> 
    </div>
    </div>
  );
};

export default Layout;

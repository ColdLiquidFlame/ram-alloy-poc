import React from 'react';
import {Box, Button, Toolbar} from "@mui/material/"

import { useLocation, useNavigate } from "react-router-dom";
import AuthenticatedUser from "../AuthenticatedUser";
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
  nav:{
    fontFamily: 'Arial',
    backgroundColor:'#888888',

    overflow:'hidden',
    marginBottom: '25px',
    paddingTop: '4px',
    zIndex: '100',
    border: 'solid 1px'
  }
}
const navButtons = [
  { title: "Dashboard", link: "/"},
  { title: "Generate QR Code", link: "/qr"},
  { title: "Login", render: <AuthenticatedUser />}
];


const Navbar = () => {
  const navigate = useNavigate();
  var location = useLocation();

  console.log("location: {location}", location);

  return (
    <div class="flexboxContainer" style={styles.flexboxContainer}>
      <div class='flexboxItem' style={styles.flexboxItem}>
        <div class="flexboxItem navbar" style={styles.nav}>
          <Toolbar>
            <Box>
              {navButtons.map(x => x.render ? x.render :
              <Button key={x.title}
                onClick={() => navigate(x.link)}
                variant={location.pathname === "/" ? "outlined" : "text "}
                >
                {x.title}
              </Button>
              )
              }
            </Box>
          </Toolbar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

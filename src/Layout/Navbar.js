// import '../main.css'
import React from 'react';
import {Box, Button, AppBar, Toolbar} from "@mui/material/"
import { makeStyles, createStyles} from "@mui/styles";
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
    backgroundColor: 'red',
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

const useStyles = makeStyles((theme) => createStyles({
  Button: { color: 'white', width: '200px', height: '50px',display: 'inline-flexbox',  background: 'lightGreen',  fontSize: '16px', border: '2px solid' },
  Box: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  Navbar: {position:"static"},
  Toolbar: {p:"100px"}
}));

const Navbar = () => {
  const navigate = useNavigate();
  var location = useLocation();

  console.log("location: {location}", location);
  const classes = useStyles();

  return (
    <div class="flexboxContainer" style={styles.flexboxContainer}>
      <div class="flexboxItem navbar" style={styles.nav}>
    <AppBar className={classes.Navbar}>
      <Toolbar className={classes.Toolbar}>
        <Box className={classes.Box}>
        {
          navButtons.map(x => x.render ? x.render :
            <Button key={x.title} className={classes.Button}
            onClick={() => navigate(x.link)}
            variant={location.pathname === "/" ? "outlined" : "text "}
          >
            {x.title}
          </Button>
            )
        }
        </Box>
      </Toolbar>
    </AppBar>
    </div>
    </div>
  );
};

export default Navbar;




  /* <Box sx={{ flexGrow: 1, display: { s: "flex", md: "none" } }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box> */



/* <Button sx={{ color: "white", width: '200px', height: '50px',display: 'inline-flexbox',  background: "rgb(151, 150, 150)",  fontSize: '16px',}}
            
            onClick={() => navigate("/")}
            variant={location.pathname === "/" ? "outlined" : "text "}
          >
            Dashboard
          </Button>
          <Button sx={{ color: "white", width: '200px', height: '50px',display: 'inline-flexbox',  background: "rgb(151, 150, 150)",  fontSize: '16px',}}
            
            onClick={() => navigate("/qr")}
            variant={location.pathname === "/qr" ? "contained" : "text "}
          >
            Generate QR Code
          </Button>
          <AuthenticatedUser /> */
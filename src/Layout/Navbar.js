import '../main.css'
import React from 'react';
// import MenuIcon from "@mui/icons-material/Menu";
//import { IconButton } from "@mui/material/"
import {Box, Button, AppBar, Toolbar} from "@mui/material/"
import { makeStyles, createStyles} from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";
import AuthenticatedUser from "../AuthenticatedUser";

const navButtons = [
  { title: "Dashboard", link: "/"},
  { title: "QR", link: "/qr"},
  { title: "Login", render: <AuthenticatedUser />}
];

const useStyles = makeStyles((theme) =>createStyles({
  Button: { color: 'white', width: '200px', height: '50px',display: 'inline-flexbox',  background: "rgb(151, 150, 150)",  fontSize: '16px'}
}));

const Navbar = () => {
  const navigate = useNavigate();
  var location = useLocation();

  console.log("location: {location}", location);
  const classes = useStyles();

  return (
   
    <AppBar position={"static"}>
      <Toolbar p={"100px"}>
        {/* <Box sx={{ flexGrow: 1, display: { s: "flex", md: "none" } }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box> */}
       
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          {/* <Button sx={{ color: "white", width: '200px', height: '50px',display: 'inline-flexbox',  background: "rgb(151, 150, 150)",  fontSize: '16px',}}
            
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
          <AuthenticatedUser /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
import '../main.css'
import useStyles from '../Styles';

// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useLocation, useNavigate } from "react-router-dom";
import AuthenticatedUser from "../AuthenticatedUser";

const Navbar = () => {
  const navigate = useNavigate();
  var location = useLocation();

  console.log("location: {location}", location);
  const classes = useStyles();

  return (
    // <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.box}>
          <IconButton className={classes.iconbutton}>
          </IconButton>
        </Box>
        <Box className={classes.box}>
          <Button className={classes.buttons} onClick={() => navigate("/")}
            variant={location.pathname === "/" ? "contained" : "text "}
          >
            Dashboard
          </Button>
          <Button className={classes.buttons} onClick={() => navigate("/qr")}
            variant={location.pathname === "/qr" ? "contained" : "text "}
          >
            Generate QR Code
          </Button>
        </Box>
        <Box className={classes.box}>
          <AuthenticatedUser />
        </Box>
      </Toolbar>
    // </AppBar> 

  );
};

export default Navbar;



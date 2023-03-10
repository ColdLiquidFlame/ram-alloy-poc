import '../main.css'
import React from 'react';
// import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import AuthenticatedUser from "../AuthenticatedUser";

const Navbar = () => {
  const navigate = useNavigate();
  var location = useLocation();

  console.log("location: {location}", location);
  return (
    <div className="navbar">
      <ul>
      <div className="Button">
        <li>
        <button onClick={() => navigate("/")}
            variant={location.pathname === "/" ? "contained" : "text "}>Dashboard
        </button>
        </li>
      </div>
      <div className="Button">
      <li>
        <button onClick={() => navigate("/qr")}
            variant={location.pathname === "/qr" ? "contained" : "text "}>Generate Cover Sheet
        </button>
      </li>
      </div>
      </ul>
      <AuthenticatedUser/>
    </div>
  );
};

export default Navbar;

/* <AppBar position={"static"}>
      <Toolbar p={"100px"}>
        <Box sx={{ flexGrow: 1, display: { s: "flex", md: "none" } }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => navigate("/")}
            variant={location.pathname === "/" ? "contained" : "text "}
          >
            Dashboard
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => navigate("/qr")}
            variant={location.pathname === "/qr" ? "contained" : "text "}
          >
            Generate QR Code
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 0,
            flexDirection: "column",

            justifyContent: "flex-end",
          }}
        >
          <AuthenticatedUser />
        </Box>
      </Toolbar>
    </AppBar> */

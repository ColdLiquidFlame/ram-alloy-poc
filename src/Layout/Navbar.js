import {
  AppBar,
  Container,
  Menu,
  Toolbar,
  Box,
  MenuItem,
  IconButton,
  Typography,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthenticatedUser from "../AuthenticatedUser";

const Navbar = () => {
  const navigate = useNavigate();
  var location = useLocation();

  console.log("location: {location}", location);
  return (
    <AppBar position={"static"}>
      <Toolbar p={"100px"}>
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => navigate("/")}
            variant={location.pathname == "/" ? "contained" : "text "}
          >
            Dashboard
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => navigate("/qr")}
            variant={location.pathname == "/qr" ? "contained" : "text "}
          >
            Generate QR Code
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 0,
            flexDirection: "column",
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <AuthenticatedUser />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

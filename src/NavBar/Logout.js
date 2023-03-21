import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/system";

const settings = ["Logout"];

const Logout = () => {
  var { logout, user } = useAuth0();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "48px",
          background: "linear-gradient(#84878C, #505155)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip title="User Settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar src={user?.picture} alt={user?.nickname} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleLogout}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default Logout;

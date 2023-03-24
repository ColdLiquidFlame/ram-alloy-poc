import React, { useState } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";

const Logout = () => {
  const { user, logout, isAdmin } = useAuthenticatedUser();

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
          {isAdmin && [
            <MenuItem
              key={0}
              component={Link}
              to={"/admin"}
              onClick={handleCloseUserMenu}
            >
              <ListItemIcon>
                <ManageAccountsIcon fontSize="small" />
              </ListItemIcon>
              <Typography textAlign="center">Admin</Typography>
            </MenuItem>,
            <Divider key={1} />,
          ]}
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Logout;

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

const navButtons = [
  { title: "Dashboard", link: "/" },
  { title: "Generate QR Code", link: "/qr" },
];

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const MenuBar = ({ sx }) => {
  const [isOpen, setDrawerState] = useState(false);

  const routeMatch = useRouteMatch(["/", "/qr"]);
  const currentTab = routeMatch?.pattern?.path ?? false;

  return (
    <Box
      sx={[
        {
          flexGrow: 1,
          display: { xs: "flex", lg: "none" },
          background: "linear-gradient(#84878C, #505155)",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => setDrawerState(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setDrawerState(false)}>
        <List>
          {navButtons.map((button) => (
            <ListItem
              key={button.title}
              disablePadding
              component={Link}
              to={button.link}
              onClick={() => setDrawerState(false)}
            >
              <ListItemButton
                selected={button.link === currentTab}
                sx={{
                  color: "#505155",
                  "&.Mui-selected": {
                    backgroundColor: "#84878C",
                    color: "white",
                  },
                  "&.Mui-selected:hover, &:hover": {
                    backgroundColor: "#f30537",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary={button.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default MenuBar;

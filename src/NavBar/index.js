import "../main.css";
import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import AuthenticatedUser from "./AuthenticatedUser";
import { AppBar, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

import logo from "./Logo.png";
import Spacer from "./Spacer";

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

const Navbar = () => {
  const routeMatch = useRouteMatch(["/", "/qr"]);
  const currentTab = routeMatch?.pattern?.path ?? false;

  return (
    <AppBar
      position="static"
      sx={{
        margin: "0 auto",
        background: "#e9e9e9",
        borderTop: "14px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: "-14px",
          flexDirection: "row",
        }}
      >
        <Spacer />
        <Box sx={{ display: "flex" }}>
          <img src={logo} alt="Ram Alloys" />
        </Box>

        <Box
          sx={{
            flex: "1 1 auto",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
          }}
        >
          <Tabs
            value={currentTab}
            sx={{
              background: "linear-gradient(#84878C, #505155)",
              minWidth: "23em",
              width: "100%",
              "& .MuiTabs-indicator": {
                backgroundColor: "#f30537",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            {navButtons.map((button) => (
              <Tab
                key={button.title}
                label={button.title}
                to={button.link}
                value={button.link}
                component={Link}
                sx={{
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  "&.Mui-selected": {
                    color: "white",
                  },
                }}
              />
            ))}
          </Tabs>
          <AuthenticatedUser />
        </Box>
        <Spacer />
      </Box>
    </AppBar>
  );
};

export default Navbar;

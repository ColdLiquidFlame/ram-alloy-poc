import "../main.css";
import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import AuthenticatedUser from "./AuthenticatedUser";
import { AppBar, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

import Spacer from "./Spacer";
import MenuBar from "./MenuBar";

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
        <MenuBar sx={{ display: { xs: "flex", lg: "none" } }} />
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Box sx={{ background: "linear-gradient(#84878C, #505155)" }} />
          <img
            src={process.env.PUBLIC_URL + "/images/Logo.png"}
            alt="Ram Alloys"
          />
        </Box>
        <Box sx={{ display: { xs: "flex", lg: "none" } }}>
          <img
            src={process.env.PUBLIC_URL + "/images/Logo.png"}
            alt="Ram Alloys"
            width={"150px"}
          />
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
                  display: { xs: "none", lg: "block" },
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  "&.Mui-selected": {
                    color: "white",
                  },
                }}
              />
            ))}
          </Tabs>
          <AuthenticatedUser
            sx={{
              minWidth: "3em",
            }}
          />
        </Box>
        <Spacer sx={{ display: { xs: "none", lg: "flex" } }} />
      </Box>
    </AppBar>
  );
};

export default Navbar;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Login from "./Login";
import Logout from "./Logout";
import { Box } from "@mui/material";

const AuthenticatedUser = (props) => {
  var { isAuthenticated } = useAuth0();

  return <Box {...props}>{isAuthenticated ? <Logout /> : <Login />}</Box>;
};

export default AuthenticatedUser;

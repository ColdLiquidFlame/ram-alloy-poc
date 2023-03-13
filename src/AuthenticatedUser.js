import React from 'react';
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Typography, Button } from "@mui/material";

import Login from "./Login";

const AuthenticatedUser = () => {
  const { accounts, instance } = useMsal();

  var [account] = accounts;

  console.log(account);

  const signOut = async () => {
    await instance.logout();
  };

  return (
    <>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Typography variant="div" m="auto 0" textAlign="center">
          {account != null ? account.name : ""}
        </Typography>
          <Button onClick={signOut}>Sign Out</Button> 
      </AuthenticatedTemplate>
    </>
  );
};

export default AuthenticatedUser;
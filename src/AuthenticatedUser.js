import React from 'react';
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Typography, Button } from "@mui/material";
import { makeStyles, createStyles} from "@mui/styles";

import Login from "./Login";
const useStyles = makeStyles((theme) => createStyles({
  Button: { color: 'white', width: '200px', height: '50px',display: 'inline-flexbox',  background: 'lightGreen',  fontSize: '16px', border: '2px solid' },
  Typography: {m:"auto 0", textAlign:"center"}
}));
const AuthenticatedUser = () => {
  const { accounts, instance } = useMsal();
  const classes = useStyles();
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
        
        <Typography className={classes.Typography} variant="div" >
          {account != null ? account.name : ""}
        </Typography>
          <Button className={classes.Button} onClick={signOut}>Sign Out</Button> 
      </AuthenticatedTemplate>
    </>
  );
};

export default AuthenticatedUser;
import Button from "@mui/material/Button";
import React from 'react';
import config from "./msalConfig";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { makeStyles, createStyles} from "@mui/styles";
// import {theme} from './theme';
const useStyles = makeStyles((theme) => createStyles({
  Button: { color: 'primary', width: '200px', height: '50px',  fontSize: '16px', border: '2px solid' },
}));
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { login } = useMsalAuthentication(InteractionType.Silent, config);
  const classes = useStyles();
  const onClick = async () => {
    await login(InteractionType.Redirect);
  };
  var { loginWithRedirect } = useAuth0();  

  return (
    <>
      <Button className={classes.Button}
        onClick={() => loginWithRedirect()}>Login
      </Button> 
    </>
  );
};

export default Login;

import Button from "@mui/material/Button";
import React from 'react';
import config from "./msalConfig";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
// import {theme} from './theme';
const Login = () => {
  const { login } = useMsalAuthentication(InteractionType.Silent, config);

  const onClick = async () => {
    await login(InteractionType.Redirect);
  };

  return (
    <>
      <Button
        onClick={onClick}
        sx={{ color: "white", width: '200px', height: '50px',display: 'inline-flexbox',  background: "rgb(151, 150, 150)",  fontSize: '16px', float:'left',}}
      >
        Login
      </Button> 
    </>
  );
};

export default Login;

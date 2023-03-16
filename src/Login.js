import Button from "@mui/material/Button";
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  
  var { loginWithRedirect } = useAuth0();  

  return (
    <>
      <Button
        onClick={() => loginWithRedirect()}>Login
      </Button> 
    </>
  );
};

export default Login;

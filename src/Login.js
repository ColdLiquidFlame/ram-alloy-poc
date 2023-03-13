import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  var { loginWithRedirect } = useAuth0();  

  return (
    <>
      <div className="login button">
        <button onClick={() => loginWithRedirect()}>Login</button>
      </div>
    </>
  );
};

export default Login;

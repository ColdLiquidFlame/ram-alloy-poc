import React from 'react';
import { Typography } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  var { logout, user } = useAuth0();

  return (
    <>
      <Typography variant="div" m="auto 0" textAlign="center">
        {user?.name}
      </Typography>
      <div className="signout button">
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>Sign Out</button>
      </div>
    </>
  );
};

export default Logout;

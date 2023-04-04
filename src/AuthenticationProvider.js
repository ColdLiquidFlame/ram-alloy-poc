import { Auth0Provider } from "@auth0/auth0-react";

import React from "react";
import { useNavigate } from "react-router";
import Auth0Config from "./Config/auth0";

console.log(Auth0Config);

const AuthenticationProvider = ({ children }) => {
  console.log(Auth0Config);

  const navigate = useNavigate();
  const handleCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname, { replace: true });
  };

  return (
    <Auth0Provider
      domain={Auth0Config.domain}
      clientId={Auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={handleCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthenticationProvider;

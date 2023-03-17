import { Auth0Provider } from "@auth0/auth0-react";

import React from "react";
import { useNavigate } from "react-router";

export default ({ children, ...props }) => {
  const navigate = useNavigate();
  const handleCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname, { replace: true });
  };

  return (
    <Auth0Provider
      domain="ramalloys-beta.us.auth0.com"
      clientId="V1BRraVfC9ShCHcEIriT1XhbnJDDRwQS"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={handleCallback}
    >
      {children}
    </Auth0Provider>
  );
};

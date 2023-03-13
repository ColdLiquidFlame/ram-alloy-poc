import React from 'react';
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';

import store from "./Store/store"

import "./App.css";
import './main.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain="ramalloys-beta.us.auth0.com"
        clientId="V1BRraVfC9ShCHcEIriT1XhbnJDDRwQS"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>  
  );
};

export default App;

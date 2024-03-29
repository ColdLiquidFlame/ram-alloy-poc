import React from "react";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../Store/store";

import "../main.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import AuthenticationProvider from "../AuthenticationProvider";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthenticationProvider>
          <Layout />
        </AuthenticationProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

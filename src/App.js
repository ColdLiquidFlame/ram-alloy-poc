import "./App.css";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import config from "./msalConfig";
import Layout from "./Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import QRCodeGenerator from "./QRCodeGenerator";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Redirect from "./Redirect";

const App = () => {
  console.log(config);
  const pca = new PublicClientApplication(config);
  return (
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </MsalProvider>
  );
};

export default App;

import "./App.css";
import AuthenticatedUser from "./AuthenticatedUser";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import config from "./msalConfig";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QRCodeGenerator from "./QRCodeGenerator";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Redirect from "./Redirect";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/qr",
      element: <QRCodeGenerator />,
    },
    {
      path: "/order/:orderId",
      element: <Orders />,
    },
    {
      path: "/redirect",
      element: <Redirect />,
    },
  ]);
  const pca = new PublicClientApplication(config);
  return (
    <MsalProvider instance={pca}>
      <AuthenticatedUser />
      <RouterProvider router={router} />
    </MsalProvider>
  );
};

export default App;

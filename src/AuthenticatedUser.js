import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Button from "@mui/material/Button";
import Login from "./Login";
import { Typography } from "@mui/material";
const AuthenticatedUser = () => {
  const { accounts, instance } = useMsal();

  var [account] = accounts;

  const signOut = async () => {
    await instance.logout();
  };

  return (
    <>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Typography variant="div" m="auto 0" textAlign="center">
          {account?.name}
        </Typography>
        <Button
          onClick={signOut}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Sign Out
        </Button>
      </AuthenticatedTemplate>
    </>
  );
};

export default AuthenticatedUser;

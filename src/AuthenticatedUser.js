import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Button from "@mui/material/Button";
import Login from "./Login";
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
        <div>{account?.name}</div>
        <Button onClick={signOut}>Sign Out</Button>
      </AuthenticatedTemplate>
    </>
  );
};

export default AuthenticatedUser;

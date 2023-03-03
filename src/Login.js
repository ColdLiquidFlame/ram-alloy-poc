// import Button from "@mui/material/Button";
import config from "./msalConfig";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

const Login = () => {
  const { login } = useMsalAuthentication(InteractionType.Silent, config);

  const onClick = async () => {
    await login(InteractionType.Redirect);
  };

  return (
    <>
    <div className="login button">
        <button onClick={onClick}>Login</button>
      </div>
      {/* <Button
        onClick={onClick}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Login
      </Button> */}
    </>
  );
};

export default Login;

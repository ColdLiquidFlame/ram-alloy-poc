const config = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}`,
    redirectUri: `${process.env.REACT_APP_STATIC_URL}/redirect`,
  },
};

export default config;

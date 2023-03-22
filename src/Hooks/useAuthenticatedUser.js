import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import UserRolesService from "../Services/UserRoles";
import { useLocation } from "react-router";

const useAuthenticatedUser = () => {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [roles, setRoles] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    async function updateUserRole() {
      if (isAuthenticated) {
        const profile = await UserRolesService.updateUserRoles({
          id: user?.sub,
          email: user?.email,
          nickname: user?.nickname,
        });
        setRoles(profile.roles);
      } else {
        await loginWithRedirect({
          appState: {
            returnTo: pathname,
          },
        });
      }
    }

    updateUserRole();
  }, [user, isAuthenticated, loginWithRedirect, pathname, isLoading]);

  return { roles, user, isAuthenticated };
};

export default useAuthenticatedUser;

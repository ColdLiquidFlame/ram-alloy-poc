import { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import UserRolesService from "../Services/UserRoles";

const useUserRoles = () => {
    const { user, isAuthenticated } = useAuth0();
    const [ roles, setRoles ] = useState([]);


    useEffect(() => {
        async function updateUserRole() {
            if(isAuthenticated)
            {
                const profile = await UserRolesService
                .updateUserRoles({id: user?.sub, email: user?.email});
                setRoles(profile.roles);
            }
        }

        updateUserRole();
  }, [user, isAuthenticated]);

  return {roles};
};

export default useUserRoles;
import { configureStore } from "@reduxjs/toolkit"
import userRolesReducer from "./Slices/userRoles";


export default configureStore({
    reducer: {
        userRoles: userRolesReducer
    }
});
import { createSlice } from '@reduxjs/toolkit'

export const userRolesSlice = createSlice({
    name: "user-roles",
    initialState: {
        userId: undefined,
        roles: []
    },
    reducers: {
        addRoles: (state, action) => {
            state.roles = [...state.roles, ...action.payload];
        }
    }
})

export const {addRoles} = userRolesSlice.actions;

export default userRolesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action) {
            return [];
        },
    },
})

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer; 
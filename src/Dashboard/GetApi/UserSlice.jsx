import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getusers } from "./UserApi";

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: null,
};

// Async thunk to fetch users
export const fetchusers = createAsyncThunk('users/fetchusers', // Corrected here
    async () => {
        const users = await getusers();
        return users;
    }
);

// Create slice for user state management
const UserSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchusers.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchusers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchusers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        });
    }
});

// Export the reducer
export default UserSlice.reducer;

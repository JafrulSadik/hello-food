import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// For Register

export const createUser = createAsyncThunk("users/create", async (user) => {
    const res = await axios.post(
        'http://localhost:5000/api/signup',
        user
    )
    return res.data;
})

// For Login

export const loginUser = createAsyncThunk("users/login", async (user) => {
    const res = await axios.post(
        'http://localhost:5000/api/login',
        user
    )
    return res.data;
})
export const logoutUser = createAsyncThunk("users/logout", async () => {
    const res = await axios.get(
        'http://localhost:5000/api/logout'
    )
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        pending: null,
        success: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Register a user
        builder
        .addCase(createUser.pending, (state) => {
            state.pending = true;
            state.error = false;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
            state.success = true;
        })
        .addCase (createUser.rejected, (state) => {
            state.pending = false;
            state.error = true;
            state.success = false;
        })
        // Login a user
        .addCase(loginUser.pending, (state) => {
            state.pending = true;
            state.error = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
            state.success = true;
        })
        .addCase (loginUser.rejected, (state) => {
            state.pending = false;
            state.error = true;
            state.success = false;
        })
        .addCase (logoutUser.pending, (state) => {
            state.pending = true;
            state.error = false;
        })
        .addCase (logoutUser.fulfilled, (state) => {
            state.pending = false;
            state.userInfo = null;
        })
        .addCase (logoutUser.rejected, (state) => {
            state.pending = false;
            state.error = true;
        })
    },
});

export default userSlice.reducer
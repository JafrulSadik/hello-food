import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const createUser = createAsyncThunk("users/create", async (user) => {
   try {
    const res = await axios.post(
        'http://localhost:5000/api/signup',
        user
    )
    return res.data;
   } catch (err) {
        return err.message
   }
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            name : '',
            email: '',
            password: '',
        },
        pending: null,
        success: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
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
        .addCase (createUser.rejected, (state, action) => {
            state.pending = false;
            state.error = true;
            state.success = false;
        })
    },
});

export default userSlice.reducer
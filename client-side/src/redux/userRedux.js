import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

// For Register

export const createUser = createAsyncThunk("users/create", async ({toast, ...user},{rejectWithValue}) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/signup',
            user
            )
        toast.success('User has been created')
        return response.data;
    } catch (err) {
        // console.log(rejectWithValue())
        return rejectWithValue(err.response.data)
    }

})

// For Login

export const loginUser = createAsyncThunk("users/login", async (user) => {
    const res = await axios.post(
        'http://localhost:5000/api/login',
        user
    )
    return res.data;
})
export const logoutUser = createAsyncThunk("users/logout", async (user) => {
    const res = await axios.get(
        'http://localhost:5000/api/logout',
        user
    )
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        pending: null,
        success: false,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        // Register a user
        builder
        .addCase(createUser.pending, (state) => {
            state.pending = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            localStorage.setItem('profile', JSON.stringify({...action.payload}))
            state.userInfo = action.payload;
            state.pending = false;
            state.success = true;
        })
        .addCase (createUser.rejected, (state, action) => {
            state.pending = false;
            state.error = action.payload
            state.success = false;
        })
        // Login a user
        .addCase(loginUser.pending, (state) => {
            state.pending = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
            state.success = true;
        })
        .addCase (loginUser.rejected, (state) => {
            state.pending = false;
            // state.error = true;
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
        .addCase (logoutUser.rejected, (state, action) => {
            state.pending = false;
            state.error = action.payload.message
        })
    },
});

export default userSlice.reducer
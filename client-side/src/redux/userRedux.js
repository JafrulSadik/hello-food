import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

export const createUser = createAsyncThunk("users/create", async (user) => {
   try {
    const res = await axios.post(
        'http://localhost:5000/api/signup',
        user
    )
    return res.data;
   } catch (err) {
    console.log(err.AxiosError)
    return err.response
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
        errorMessage : {}
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
            state.errorMessage = action.payload;
            console.log(action);
        })
    },
});

export default userSlice.reducer
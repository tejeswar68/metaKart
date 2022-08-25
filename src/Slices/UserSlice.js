import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// make http POST req to login-user.
export const userLogin= createAsyncThunk('/userlogin', async(userCredObj, thunkApi) => {

    let res= await axios.post('user/login', userCredObj);
    let data= res.data;

    if (data.msg === 'Login Success.') {
        // store token in local storage.
        localStorage.setItem('token', data.payload);
        return data.userObj;
    }

   else {
        return thunkApi.rejectWithValue(data);
    }

})

let userSlice= createSlice({
    name: 'user',
    initialState: {
        userObj: {},
        isError: false,
        isLoading: false,
        isSuccess: false,
        errMsg: ''
    },
    reducers: {
        clearLoginStatus: (state) => {
            state.userObj= null;
            state.isError= false;
            state.isSuccess= false;
            state.errMsg= '';

            return state;
        }
    },
    extraReducers: {
        // track the licfecylce of promise returned by createAsyncThunk
        [userLogin.pending]: (state, action) => {
            state.isLoading= true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.userObj= action.payload;
            state.isError= false;
            state.isLoading= false;
            state.isSuccess= true;
            state.errMsg= '';
        },
        [userLogin.rejected]: (state, action) => {
            state.isError= true;
            state.isLoading= false;
            state.isSuccess= false;
            state.errMsg= action.payload.msg;
        }
    }
})

// export action creators.
export const { clearLoginStatus }= userSlice.actions;

// export reducer.
export default userSlice.reducer;
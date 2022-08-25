import { configureStore } from '@reduxjs/toolkit';
// importing the userSlice.reducer
import userReducer from './Slices/UserSlice';

// creating redux store.
export const store= configureStore({
    reducer: {
        user: userReducer
    }
})
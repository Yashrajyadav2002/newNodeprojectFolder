import {configureStore} from '@reduxjs/toolkit';
import myReducer from "./cartslice";

export const store = configureStore({
    reducer:{
        mycart:myReducer
    }
})

import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/index";
import thunk from "redux-thunk";

 //reducer : rootReducers, =adalah kita menggunakan kumpulan reducer pada combine reducer

 export default configureStore({
    //ember ember yang kita simpan
    reducer: rootReducers,
    //sudah menggunakan redux thunk untuk menjadi middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
     devTools: process.env.NODE_ENV !== "production",
});
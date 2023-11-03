import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authRatingSlice from "./rating/authRatingSlice";
import authMovieSlice  from "./movie/authMovieSlice";
import searchMovieSlice from "./movie/searchMovieSlice";




//combine reducer adalah tempat dimana kita melakukan setup
//daftarkan reducer yang ingin dipakai
export default combineReducers({
auth : authLoginSlice,
movies : authMovieSlice,
rating : authRatingSlice,
search : searchMovieSlice
});
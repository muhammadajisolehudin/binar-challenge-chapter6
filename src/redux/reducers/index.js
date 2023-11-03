import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authRatingSlice from "./rating/authRatingSlice";
import authMovieSlice  from "./movie/authMovieSlice";
import searchMovieSlice from "./movie/searchMovieSlice";
import detailMovieSlice from "./movie/detailMovieSlice";
import getMeSlice from "./movie/getMeSlice";




//combine reducer adalah tempat dimana kita melakukan setup
//daftarkan reducer yang ingin dipakai
export default combineReducers({
auth : authLoginSlice,
me : getMeSlice,
movies : authMovieSlice,
detail : detailMovieSlice,
rating : authRatingSlice,
search : searchMovieSlice
});
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchData: []
}

const searchMovieSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchData: (state, action) => {
            state.searchData = action.payload;
        },
    }
});


export const {  setSearchData } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;



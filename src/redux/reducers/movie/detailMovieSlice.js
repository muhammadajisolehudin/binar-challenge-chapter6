import { createSlice } from "@reduxjs/toolkit";


const initialState = {
detail : [],
// searchData: null
}

//pengambilan data movie
const detailMovieSlice = createSlice({
    name : "detail",
    initialState ,
    reducers :{
        setDetail: (state, action) => {
            state.detail = action.payload;
          },
    }
})

export const { setDetail } = detailMovieSlice.actions;
export default detailMovieSlice.reducer ;

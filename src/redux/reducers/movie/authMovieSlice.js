import { createSlice } from "@reduxjs/toolkit";


const initialState = {
movie : [],
// searchData: null
}

//pengambilan data movie
const authMovieSlice = createSlice({
    name : "movieAuth",
    initialState ,
    reducers :{

        setMovie: (state, action) => {
            state.movie = action.payload;
          },
    }
})

export const { setMovie } = authMovieSlice.actions;
export default authMovieSlice.reducer ;

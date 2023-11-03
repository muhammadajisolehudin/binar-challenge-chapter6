import { createSlice } from "@reduxjs/toolkit";


const initialState = {
getMe : [],
// searchData: null
}

//pengambilan data movie
const getMeSlice = createSlice({
    name : "getMe",
    initialState ,
    reducers :{
        setGetMe: (state, action) => {
            state.getMe = action.payload;
          },
    }
})

export const { setGetMe } = getMeSlice.actions;
export default getMeSlice.reducer ;

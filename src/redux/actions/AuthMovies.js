import http from "../../utils/http";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { reduxMovie } from "../../services/movie/get-data-movie";
import { setMovie } from "../reducers/movie/authMovieSlice";
import { reduxMovieDetail } from "../../services/movie/get-data-movie-detail";
import { setSearchData } from "../reducers/movie/searchMovieSlice";
import { reduxMovieSearch } from "../../services/movie/search-data-movie";
import { setDetail } from "../reducers/movie/detailMovieSlice";


// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya 
export const dataMovie = (page) => async (dispatch) => {
    return reduxMovie(page).then((result) => {
    //console.log(result, "ini datanya")
        return dispatch(setMovie(result.data.data));
    }).catch((err) => {
        console.log(err,"ada yang salah");

    });
    
}



export const dataMovieDetail = (id) => (dispatch) => {
    

     console.log(id,"idnya loh ini")
    return reduxMovieDetail(id).then((result) => {
        console.log(result)
        return dispatch(setDetail(result.data.data));
        
    }).catch((err) => {
        
        console.log(err, "ini salah ")
    });
    
}

//melakukan navigasi dan menerima parameter
export const searchAndNavigate = (query) => (dispatch) => {
  window.location.href = `/search/${query}`
};

export const searchMovie = (page, query) => async (dispatch) => {
     return reduxMovieSearch(page, query).then((result) => {
        console.log(result, "ini coba dilihat")
        return dispatch(setSearchData(result));
    }).catch((err) => {
        
    });
};

// export default dataMovie



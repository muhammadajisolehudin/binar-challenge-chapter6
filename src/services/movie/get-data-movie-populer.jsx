import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { http3 } from "../../utils/http3";

const fetchDataMoviePopular = async (page) => {
    console.log(page, "ini page")
    const { data } = await http3.get(`${API_ENDPOINTS.POPULAR_MOVIE}?page=${page}`)
    return data
}

const useMovieDataPopularQuery = (page, token) =>{
    return useQuery(["userDataMoviePopular", page], ()=> fetchDataMoviePopular(page));
}



// const fetchDataMoviePopular = async ({queryKey}) => {
//     const [_key, _params] = queryKey;
//     const { data } = await http3.get(_key, {params: _params});
//     console.log(_key, "ini key")
//     return data  
// }

// const useMovieDataPopularQuery = (options) =>{
//     return useQuery([API_ENDPOINTS.POPULAR_MOVIE, options], fetchDataMoviePopular);
// }

export {fetchDataMoviePopular, useMovieDataPopularQuery}

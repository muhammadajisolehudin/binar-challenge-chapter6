import { useQuery } from "@tanstack/react-query";
//cara import file external
import {http} from "../../utils/http";
import { API_ENDPOINTS } from "../../utils/api-endpoints";

//cara pertama untuk hit API
//const fetchDataMovie = async (page) => {
    //untuk handle api
    /*console.log(page, "ini page")
    const { data } = await http.get(`3/movie/now_playing?page=${page}`)
    return data*/
    
    // metode level 3 (tamabah 1 parameter page)
    /*console.log(page, "ini page")
    const { data } = await http.get(`${API_ENDPOINTS.NOW_PLAYING}?page=${page ? page : 1}`)
    return data*/

//}

//metode level 4 (bisa menampung lebih dari 1 parameter, lebih dinamis)
const fetchDataMovie = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, {params: _params});
    return data
}

//dinamis handle
//level 3
/*const useMovieDataQuery = (page) =>{
    return useQuery(["userData", page], ()=> fetchDataMovie(page));
}*/

//Level 4
const useMovieDataQuery = (options) =>{
    return useQuery([API_ENDPOINTS.NOW_PLAYING, options], fetchDataMovie);
}

export {fetchDataMovie, useMovieDataQuery}
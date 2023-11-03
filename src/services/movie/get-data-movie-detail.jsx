import { useQuery } from "@tanstack/react-query";
//cara import file external
import {http3} from "../../utils/http3";
import { API_ENDPOINTS } from "../../utils/api-endpoints";


//dengan redux
export const reduxMovieDetail = async (id) => {
    return await http3.get(`${API_ENDPOINTS.DETAIL_MOVIE}${id}`)
}
//tanpa redux
const fetchDataMovieDetail = async (id) => {
    console.log(id, "ini id movie")
    const { data } = await http3.get(`${API_ENDPOINTS.DETAIL_MOVIE}${id}`)
    return data
}

const useMovieDataDetailQuery = (id) =>{
    return useQuery(["userDataMovieDetail", id], ()=> fetchDataMovieDetail(id));
}

export {fetchDataMovieDetail, useMovieDataDetailQuery}
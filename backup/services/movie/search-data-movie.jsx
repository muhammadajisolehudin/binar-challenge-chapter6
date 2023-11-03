
import { http3 } from "../../utils/http3";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

// const apiKey = process.env.REACT_APP_KEY
// const mainUrl = process.env.REACT_APP_SERVER.SEARCH_MOVIE

// export const getDataMovie = async () => {
//     const movie = await axios.get(`${mainUrl}/movie/popular?page=1&query=S`);
//     return movie.data.results
// }


// export const searchMovie = async (q, PageNow) => {
//   const search = await http3.get(`${API_ENDPOINTS.SEARCH_MOVIE}?page=${PageNow}&query=${q}`);
//   return search.data
// };


const searchMovie = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http3.get(_key, { params: _params });
  return data;
};

const useSearchMovieQuery = (options) => {
  return useQuery([API_ENDPOINTS.SEARCH_MOVIE, options], searchMovie);
};

export { searchMovie, useSearchMovieQuery };

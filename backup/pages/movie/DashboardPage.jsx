import React, { useEffect, useState } from 'react';
import { useGetDataUser } from '../../services/auth/get_user';
import { Link, useNavigate } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { fetchDataMoviePopular, useMovieDataPopularQuery} from '../../services/movie/get-data-movie-populer';
import { Carousel } from '@material-tailwind/react';
import { CorouselItem } from '../../asset/components/corousel/CorouselItem';
import { ListData } from '../../asset/components/RanderList/ListData';
// import { searchMovie } from '../../services/movie/search-data-movie';

export const DashboardPage = () => {
  
const [movies, setMovies] = useState([]);
const [PageNow, setPageNow] = useState(1);
const [SearchDataMovie, setSearchDataMovie] = useState('');
const navigate = useNavigate();


// const { data: movieData } = useMovieDataPopularQuery({
//   page : PageNow
// });
const { data: Paijo, isError, status } = useGetDataUser({});
const { data: popularMovie } = useMovieDataPopularQuery(PageNow);
    
const handleLogout = () => {
  CookieStorage.remove(CookieKeys.AuthToken, {});
  navigate('/')
}

const getDataMovie = async () => {
  const data = await fetchDataMoviePopular(PageNow)
  setMovies(data.data) 
} 

  const goToSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${SearchDataMovie}`);
    setSearchDataMovie();
  };

// const search  = async (q) => {
//     if (q.length > 0) {
//         const query = await searchMovie(q, PageNow)
//         setMovies(query.results)
//     }
//   }



useEffect(()=>{
  getDataMovie()
  console.log(popularMovie, "ini datanya")
}, [Paijo, popularMovie])


  return (
    <div className="bg-[#1e1e2a]">
      <div className='font-sans'>
        <div className=" min-h-screen bg-transparent h-screen">
          <div className='relative z-40 p-4'>
            <div className='flex justify-between bg-slate-950'>
              <div>
                <Link className="text-xl font-semibold mb-2" to={`/dashboard`}>
                  <h1 className='text-red-500 font-bold text-4xl'>MovieList</h1>
                </Link> 
              </div>
               <div className="relative">
                <form onSubmit={goToSearch}>
                  <input type="text" className="bg-transparent border-2 text-white border-red-500 w-[30rem] h-[2.5rem] py-2 px-3 rounded-full focus:outline-none" placeholder="Search for movies..."  onChange={(e) => setSearchDataMovie(e.target.value)} value={SearchDataMovie} />
                  <button className="absolute right-0 top-0 text-white rounded-r px-3 py-2"  type="submit" onSubmit={goToSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                  </button>
                </form>
              </div>
              <div className='gap-3'>
                <button onClick={handleLogout} className="text-white w-[6rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Logout</button>
              </div>
            </div>
          </div>
          
          <Carousel
            className="mt-[-4.5rem]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {movies.map(movie => (
              <CorouselItem key={movie.id}id={movie.id} overview={movie.overview} backdrop_path={movie.backdrop_path} runtime={movie.runtime} title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
            ))}
          </Carousel>
        </div>

        <div
          className="rounded-xl mt-[-4.2rem]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {movies.map((movie) => (
            <div
              id={movie.id}
              overview={movie.overview}
              backdrop_path={movie.backdrop_path}
              runtime={movie.runtime}
              title={movie.title}
              releaseDate={movie.release_date}
              posterPath={movie.poster_path}
              key={movie.id}
            />
          ))}
        </div>

        <div className="p-4">
          <div className="flex justify-between h-[2.5rem] m-0 p-0">
          </div>

          <div className="mx-auto mt-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {movies.map(movie => (
                <ListData id={movie.id} key={movie.id}title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
              ))}
            </div>
                
              <div className='flex justify-between mt-8'>
              
              <button className='text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500' onClick={()=>{
                setPageNow(PageNow - 1)
              }}>Back Page</button>
              <h1 className="font-bold text-2xl text-white">{PageNow}</h1>
              <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500" onClick={() => {
                setPageNow(PageNow + 1);
              }}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

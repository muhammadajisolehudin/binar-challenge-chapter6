import React, { useEffect, useState } from 'react';
import { useGetDataUser } from '../../services/auth/get_user';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
// import { fetchDataMoviePopular, useMovieDataPopularQuery} from '../../services/movie/get-data-movie-populer';
import { Carousel } from '@material-tailwind/react';
import { CorouselItem } from '../../asset/components/corousel/CorouselItem';
import { ListData } from '../../asset/components/RanderList/ListData';
import { useSearchMovieQuery } from '../../services/movie/search-data-movie';

export const SearchPage = () => {
    const { query } = useParams();
    const [querySearch, setQuerySearch] = useState('');
    const [SearchDataMovie, setSearchDataMovie] = useState('');
    const [PageNow, setPageNow] = useState(1);
    const navigate = useNavigate();

    const { data: searchQuery } = useSearchMovieQuery({
        page: PageNow,
        query: query || "",
    });

    const { data: Paijo, isSuccess } = useGetDataUser({});

     const searchData = () => {
        if (searchQuery) {
        setQuerySearch(searchQuery.data);
        }
    };

    const goToSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${SearchDataMovie}`);
        setSearchDataMovie();
    };

    const handleLogout = () => {
        CookieStorage.remove(CookieKeys.AuthToken, {});
        navigate('/')
    }

    useEffect(() => {
    if (isSuccess) {
      searchData();
    }
  });

    return (
        <div className="bg-[#1e1e2a]">
            <div className="relative">
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
            </div>

            

            <div className="p-4">
                <div className="flex justify-between h-[2.5rem] m-0 p-0">
                    <h1 className="font-semibold text-2xl text-white">
                        your search "{query}"
                    </h1>
                </div>

                <div className="mx-auto mt-10 px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                        {searchQuery && searchQuery.data ? ( // Memeriksa apakah searchQuery dan searchQuery.data terdefinisi
                            searchQuery.data.map(movie => (
                                <ListData id={movie.id} key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} />
                            ))
                        ) : 
                        (
                            <p>Loading data...</p> 
                        )}
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
    )
}

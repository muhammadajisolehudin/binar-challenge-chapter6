import React, { useEffect, useState } from 'react';
import { useGetDataUser } from '../../services/auth/get_user';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
// import { fetchDataMoviePopular, useMovieDataPopularQuery} from '../../services/movie/get-data-movie-populer';
import { Carousel } from '@material-tailwind/react';
import { CorouselItem } from '../../asset/components/corousel/CorouselItem';
import { ListData } from '../../asset/components/RanderList/ListData';
import { useSearchMovieQuery } from '../../services/movie/search-data-movie';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, getMeData } from '../../redux/actions/authLogin';
import { searchAndNavigate, searchMovie } from '../../redux/actions/AuthMovies';
import { NavigationBar } from '../../asset/components/navigation/NavigationBar1';

export const SearchPage = () => {
    const { query } = useParams();
    const [PageNow, setPageNow] = useState(1);
    const dispatch = useDispatch()
    const dataMe = useSelector((store) => store.me)
    const searchQuery = useSelector((store) => store.search.searchData);

   
   

    useEffect(() => {
        dispatch(getMeData())
        if (query !== undefined) { // Cek apakah 'query' sudah terdefinisi
            const page = PageNow;
            const queryValue = query || '';
            dispatch(searchMovie(page, queryValue));
        }
    },[dispatch, PageNow, query]);

    return (
        <div className="bg-[#1e1e2a]">

            <NavigationBar/>

            <div className="p-4">
                <div className="flex justify-between h-[2.5rem] m-0 p-0">
                    <h1 className="font-semibold text-2xl text-white">
                        your search "{query}"
                    </h1>
                </div>

                <div className="mx-auto mt-10 px-4 ">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                        {searchQuery && searchQuery.data ? ( // Memeriksa apakah searchQuery dan searchQuery.data terdefinisi
                            searchQuery.data.map(movie => (
                                <ListData id={movie.id} key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} />
                            ))
                        ) : 
                        (
                            
                            <h1 className='text-white text-xl font-bold text-center'> loading ...</h1>
                            
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

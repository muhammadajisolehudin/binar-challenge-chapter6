import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';
import { fetchDataMovieDetail, useMovieDataDetailQuery } from '../../services/movie/get-data-movie-detail';
import { useGetDataUser } from '../../services/auth/get_user';

export const DetailPage = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    let [DataSearch, setDataSearch] = useState("") 

    const{data:fetchUser} = useMovieDataDetailQuery(id)
    const { data: Paijo, isError, status } = useGetDataUser({});

    const getDataMovieById = async () => {
        const data = await fetchDataMovieDetail(id)
        setMovies(data.data) 
        console.log(movies, "data movie");
    } 

    
    const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken, {});
    navigate('/')
    }

    //untuk melakukan tindakan saat pertama dijalankan atau di mounting
    useEffect(()=>{
        getDataMovieById()
        //console.log(movies, "ini datanya")
        console.log(fetchUser, "masa gak ada")
    }, [Paijo])


  return (
    <div>
        <div className='font-sans'>
            <div className=" min-h-screen bg-transparent h-screen">
                <div className='relative z-40 p-4'>
                    <div className='flex justify-between bg-slate-950'>
                        <div>
                            <Link className="text-xl font-semibold mb-2" to={`/dashboard`}>
                                <h1 className='text-red-500 font-bold text-4xl'>MovieList</h1>
                            </Link> 
                        </div>
                        <div>
                            <input type="text" className="bg-transparent border-2 border-red-500 placeholder-white w-[30rem] h-[2.5rem] py-2 px-3 rounded-full focus:outline-none" placeholder="Search for movies..." onChange={(e)=>{setDataSearch(e.target.value)}} />
                        </div>
                        <div className='gap-3'>
                            <button onClick={handleLogout} class="text-white w-[6rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Logout</button>
                        </div>
                    </div>
                </div>
        
               <div alt="image 1"className="bg-cover h-[700px] p-4 w-full mt-[-4.5rem]" style={{  backgroundImage: `url('https://image.tmdb.org/t/p/original${movies.backdrop_path}')`}}  >
                    <div className='flex'>
                        <div className='flex text-white self-center gap-4 mt-[10rem] ms-10 flex-col w-[50%]'>
                            <h1 className='text-[45px] font-bold'>{movies.title}</h1>
                            <p>Synopsis : {movies.overview}</p>
                            <p>Run Time : { movies.runtime } &nbsp; minute </p>
                            <p className='w-full max-w-[50%] flex flex-row items-center gap-1'><svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg> {movies.vote_average} / 10</p>
                            <p className=''>Release Date : { movies.release_date } </p>
                            <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Watch NOW</button>
                        </div>
                        <div className='flex justify-center items-center w-[50%] mt-32 content-center'>
                            <div className=' bg-white rounded-lg shadow-lg max-w-xs'>
                                <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}  className="w-[100%] h-[100%] object-cover rounded-lg" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchAndNavigate } from '../../../redux/actions/AuthMovies';
import { LogOut } from '../../../redux/actions/authLogin';
import UserIcon from '../user icon/IconUser';

export const NavigationBar = () => {
    const [SearchDataMovie, setSearchDataMovie] = useState('');
    const dispatch = useDispatch()

    const goToSearch = (e) => {
        e.preventDefault();
        dispatch(searchAndNavigate(SearchDataMovie));
        setSearchDataMovie();
    };

    return (
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

                <UserIcon />
                    
                <div className='gap-3'>
                    <button onClick={()=>{
                    dispatch(LogOut())
                    }} className="text-white w-[6rem] h-[2.5rem] rounded-full font-semibold bg-red-500">
                        Logout
                    </button>
                </div>
                
            </div>
        </div>
    )
}

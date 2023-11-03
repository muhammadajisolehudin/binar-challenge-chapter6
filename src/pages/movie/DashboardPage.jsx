import React, { useEffect, useState } from 'react';
import { useGetDataUser } from '../../services/auth/get_user';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel, useSelect } from '@material-tailwind/react';
import { CorouselItem } from '../../asset/components/corousel/CorouselItem';
import { ListData } from '../../asset/components/RanderList/ListData';
import { useDispatch, useSelector } from 'react-redux';
import { dataMovie, searchAndNavigate } from '../../redux/actions/AuthMovies';
import { NavigationBar } from '../../asset/components/navigation/NavigationBar1';
import { getMeData } from '../../redux/actions/authLogin';
import { CarouselKomponen } from '../../asset/components/corousel/Carousel';
// import { NavigationBar } from '../../asset/components/navigation/NavigationBar';
// // import { searchMovie } from '../../services/movie/search-data-movie';

export const DashboardPage = () => {

const [PageNow, setPageNow] = useState(1);
const dispatch = useDispatch  ()

//get me ini
// console.log(Paijo)
const dataMe = useSelector((store) => store.me)


const getDataMovie = async () => {
  const data = await dispatch(dataMovie(PageNow))
} 

  const movies = useSelector((store) => store.movies.movie)
  // console.log(movies)




useEffect(()=>{
  getDataMovie()
  dispatch(getMeData())
  //console.log(popularMovie, "ini datanya")
}, [PageNow])


  return (
    <div className="bg-[#1e1e2a]">
      <div className='font-sans'>
        <div className=" min-h-screen bg-transparent h-screen">
          
          <NavigationBar/>

          <CarouselKomponen/>
          
        </div>

        <div className="p-4">
          <div className="flex justify-between h-[2.5rem] m-0 p-0">
          </div>

          <div className="mx-auto mt-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {movies && movies.length > 0 ?(movies.map(movie => (
                <ListData id={movie.id} key={movie.id}title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
                ))
              ):(
                null
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
    </div>
  );
}
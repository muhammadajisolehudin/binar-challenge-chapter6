import React from 'react'

export const CorouselItem = (props) => {
  return (
    
     <div alt="image 1" className=" bg-cover h-[100%] w-screen" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${props.backdrop_path}')` }}  >
        <div className='flex'>
            <div className='flex text-white self-center gap-4 mt-[10rem] ms-10 flex-col pl-10'>
                <h1 className='text-[50px] font-bold'>{props.title}</h1>
                <p className='max-w-[50%]'>{props.overview} </p>
                <p className=''>Release Date : {props.releaseDate}</p>
                <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Watch NOW</button>
            </div>
        </div>
    </div>             
  )
}
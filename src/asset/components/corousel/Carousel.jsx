import { Carousel } from '@material-tailwind/react'
import React from 'react'
import { CorouselItem } from './CorouselItem'
import { useSelector } from 'react-redux'

export const CarouselKomponen = () => {
    const movies = useSelector((store) => store.movies.movie)
  return (
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
            {movies && movies.length > 0 ? (
              movies.map(movie => (
                <CorouselItem key={movie.id} id={movie.id} overview={movie.overview} backdrop_path={movie.backdrop_path} runtime={movie.runtime} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} />
              ))
            ) : (
              <div className='flex flex-col justify-center items-center mt-80'>
                <h className="text-white font-semibold text-2xl ">Loading...</h>
              </div>
            )}
    </Carousel>
  )
}

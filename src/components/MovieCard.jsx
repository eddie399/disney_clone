import React from 'react'


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({movie}) {
  return (
    <>
        <img src={IMAGE_BASE_URL+movie.poster_path} alt="poster"
        className='w-[110px] md:w-[200px] rounded-md hover:border-[4px] border-cyan-200 hover:scale-110 transition-all duration-150 ease-in-out'
        />
    </>
  )
}

export default MovieCard
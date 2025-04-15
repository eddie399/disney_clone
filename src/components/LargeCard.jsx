import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


function LargeCard({movie}) {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in-out'>
        <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="poster"
        className='w-[110px] md:w-[260px] rounded-md hover:border-[4px] border-cyan-200'
        />
        <h2 className='w-[110px] md:w-[260px] text-white font-bold pt-2'>{movie.title}</h2>
    </div>
  )
}

export default LargeCard
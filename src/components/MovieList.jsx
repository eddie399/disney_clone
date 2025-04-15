import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import LargeCard from './LargeCard';


const screenWidth = window.innerWidth;
function MovieList({genreId, index_}) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect (() => {
        getMovieByGenreId();
    }, [])
//getting movie by genreId
    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp=> {
            //console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const SliderRight=( element) => {
        element.scrollLeft+=screenWidth-110
       } 
       const SliderLeft=( element) => {
        element.scrollLeft-=screenWidth-110
       } 
  return (
    <div>
            <HiChevronLeft className={`hidden md:block text-white text-[30px] 
            absolute left-0 mx-8 cursor-pointer ${index_%3==0?'mt-[90px]':'mt-[160px]'}`}
              onClick={()=>SliderLeft(elementRef.current)}
            />
            <HiChevronRight className={`hidden md:block text-white text-[30px] 
            absolute right-0 mx-8 cursor-pointer ${index_%3==0?'mt-[90px]':'mt-[160px]'}`}
              onClick={()=>SliderRight(elementRef.current)}
            />
        <div className='flex overflow-x-auto gap-8 [&::-webkit-scrollbar]:hidden pt-5 px-3 pb-5 scroll-smooth' ref={elementRef}>
            {movieList.map((item, index) => (

                <>
                    {index_%3==0?<LargeCard movie={item} />:<MovieCard movie={item}/>}
                </>
               
            ))}
        </div>

        
    </div>
  )
}

export default MovieList
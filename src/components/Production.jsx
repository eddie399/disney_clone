import React from 'react'

import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'

import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import starwarV from '../assets/videos/star-wars.mp4'
import natgeoV from '../assets/videos/natgeo.mp4'
import pixarV from '../assets/videos/pixar.mp4'




function Production() {
    const productionList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:natgeoV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionList.map((item) => (
            <div className='border-[2px] border-cyan-200 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-cyan-800/50'>
                <video src={item.video} autoPlay loop playsInline muted 
                className='absolute top-0 rounded-md z-10 opacity-0 hover:opacity-50'
                />
                <img src={item.image} alt="" className='w-full z-[1]' />
               
            </div>
        ))}
    </div>
  )
}

export default Production
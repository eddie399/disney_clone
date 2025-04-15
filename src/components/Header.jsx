import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

import { HiStar,  HiPlus, HiPlayCircle, HiTv, HiMagnifyingGlass, HiHome} from 'react-icons/hi2';
import HeaderItem from './HeaderItem';
import { HiDotsVertical } from 'react-icons/hi';



function Header() {

    const [toggle, setToggle] = useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex justify-between p-5 bg-cyan-950 rounded-l-4xl rounded-r-4xl'>
        <div className='flex gap-8 items-center'>
          
                <img src={logo} alt="loho" className='w-[80px] md:w-[115px] object-cover'/>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) =>(
                        <HeaderItem  name={item.name} Icon={item.icon}/>
                    ))}
                </div>
                <div className='flex md:hidden gap-8'>
                    {menu.map((item, index) =>index<3&&(
                        <HeaderItem  name={''} Icon={item.icon}/>
                    ))}
                    <div className='md:hidden' onClick={() =>setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />

                        {toggle? <div className='absolute mt-3 bg-[#121212] border-gray-700 border-[1px] p-3 px-5 py-4'>
                            {menu.map((item, index) =>index>2&&(
                                <HeaderItem  name={item.name} Icon={item.icon}/>
                            ))}
                        </div>:null}
                    </div>
                </div>
        </div>
        
            <img src="https://img.icons8.com/?size=100&id=23244&format=png&color=000000" alt=""
            className='w-[40px] rounded-full'
            />
        
    </div>
  )
}

export default Header
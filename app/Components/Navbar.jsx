'use client'
import React from 'react'
import {HiBars3BottomRight} from 'react-icons/hi2'
import Image from 'next/image'
import {useContext} from 'react'
import { SideBar } from '../Context/Context'
import MenuSide from './MenuSide'
const Navbar = () => {

  const {open,SetOpen} = useContext(SideBar)



  return (
    <>
    {!open &&
    <div className='overflow-hidden fixed top-0 left-0 z-50'>
 <MenuSide/>
    </div>
   }
    <div className='flex  mx-6 lg:mx-14 justify-between items-center mb-12 py-8'>
      <div className=''>
        <Image src='/logo.png' className=' border-[1.5px] border-gray-200 rounded-md px-4 py-2 bg-white object-cover hover:bg-orange-600 cursor-pointer ' width={155} height={50} alt='Creavizia' />
      </div>
      <div>
        <HiBars3BottomRight onClick={()=>SetOpen(!open)} className='rotate-180 cursor-pointer hover:text-[#D6401F]' size={30}/>
      </div>
    </div>
    </>
  )
}

export default Navbar
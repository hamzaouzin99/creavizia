'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useContext} from 'react'
import { SideBar } from '../Context/Context'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'



const MenuSide = () => {
    const {open,SetOpen} = useContext(SideBar)


  return (
    <div className='w-screen h-screen transition-opacity fixed top-0 left-0 duration-300  p-10 bg-white flex flex-col '>
        <div className='absolute right-12 bottom-8'>
            <button className='bg-red-500 hover:bg-red-600 rounded-full text-white p-3' onClick={()=>SetOpen(!open)}>X</button>
        </div>
        <div className='flex justify-between items-center mx-2 lg:mx-12'>
            <Link href="/#about" onClick={()=>SetOpen(!open)} >
                <Image src='/logo.png' alt='Creavizia' width={140} height={50}/>
            </Link>
            <div className='flex gap-3'>
            <Link href='https://facebook.com/creavizia'><RiFacebookBoxFill size={26} className='text-blue-700'/></Link>
                <Link href='https://www.instagram.com/creavizia'><RiInstagramFill size={26} className='text-red-400'/></Link>
                <Link href='https://wa.me/212656738896'><RiWhatsappFill size={26} className='text-green-600'/></Link>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-7 mt-28'>
                <Link href="/#about" onClick={()=>SetOpen(!open)}  className='font-bold  text-3xl h1 hover:text-[#D6401F]'>الرئيسية</Link>
                <Link href="/#services" onClick={()=>SetOpen(!open)} className='font-bold  text-3xl hover:text-[#D6401F]'>خدماتنا</Link>
                <Link href="/#works" onClick={()=>SetOpen(!open)}  className='font-bold  text-3xl hover:text-[#D6401F]'>أعمالنا</Link>
                <Link href="/#contact" onClick={()=>SetOpen(!open)}  className='font-bold text-3xl hover:text-[#D6401F]'>إتصل بنا</Link>
                <Link href="/#contact" onClick={()=>SetOpen(!open)} ><button className='bg-[#D6401F] font-bold text-lg p-3 text-white tracking-wide rounded-md'>أطلب موقعك الإلكتروني</button></Link>
                <Link className='flex gap-2 text-3xl items-center' target="_blank" href='https://wa.me/212656738896'><span></span><span className='hover:text-green-600'>88 96 73 56 06</span><RiWhatsappFill size={36} className='text-green-600'/> </Link>
        </div>
    </div>
  )
}

export default MenuSide
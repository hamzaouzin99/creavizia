import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'


const Footer = () => {
  return (
    <div id='footer' className='mx-14 lg:mt-20 justify-center items-center bg-[url("/square.svg")] bg-bottom   '>
        <div className='grid lg:grid-cols-4 gap-6 p-16 border-b-[1px] border-gray-200 '>

            <div className='flex justify-center'>
                <Image src='/logo.png' width={150} height={50} alt='Creavizia'/>
            </div>

            <div className='lg:col-span-2  grid grid-cols-1 text-center mx-auto lg:flex justify-center gap-4'>
                
                <Link className=' text-xl font-semibold' href="/#about">الرئيسية</Link>
                <Link className=' text-xl font-semibold' href="/#services">خدماتنا</Link>
                <Link className=' text-xl font-semibold'href="/#works">أعمالنا</Link>
                <Link className=' text-xl font-semibold' href="/#contact">إتصل بنا</Link>
                
            </div>

            <div className='flex gap-2 mx-auto lg:ml-auto'>
                <Link href='https://facebook.com/creavizia'><RiFacebookBoxFill size={26} className='text-blue-700'/></Link>
                <Link href='https://www.instagram.com/creavizia'><RiInstagramFill size={26} className='text-red-400'/></Link>
                <Link href='https://wa.me/212656738896'><RiWhatsappFill size={26} className='text-green-600'/></Link>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-5  text-center lg:grid-cols-3 p-8 lg:p-16  justify-center items-center'>
           
            <div className='lg:mr-auto hidden '>
                <Link className='text-center text-lg font-semibold ' href="/">سياسة الخصوصية</Link>
            </div>
            <div className='col-span-2'>
                <p className='text-center text-lg font-semibold lg:text-center'>جميع الحقوق محفوظة ل <span className='text-orange-600'>&copy;2023 Creavizia </span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer
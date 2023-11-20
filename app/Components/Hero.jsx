import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'



const Hero = () => {
  return (
    <div id='about' className="bg-[url('/bg.svg')] object-cover relative">
      <Navbar />
      <Image src="/animation.gif" className='absolute -bottom-16 left-10 lg:left-[450px]' alt="" width={100} height={100}/>
       <div className='flex justify-center hover:bg-[#FDF0E7] cursor-pointer mt-12 mb-8 mx-auto items-center w-fit gap-2 font-mono rounded-full px-3 py-1 border-2 border-[#D6401F] '>
        <p className='rounded-full text-sm font-bold tracking-wider px-2 text-[#D6401F] border-2 border-[#D6401F] bg-[#FDF0E7]'>30% خصم</p>
        <p className='text-[#D6401F] tracking-wider font-semibold'>في نونبر</p>
       </div>
       <div>
        <h1 className='h1 block  text-slate-800  my-4 text-4xl lg:text-7xl text-center font-bold items-center mx-8 lg:mx-40 capitalize leading-10'><span className='bg-orange-600 text-white rotate-3 p-4 inline-block hover:rotate-0 cursor-pointer transition-all duration-300'>Creavizia</span> جاهزة للعمل على مشروعك</h1>
        <p className='p text-center text-lg font-normal flex justify-center items-center lg:mx-56 mt-5 mx-8'>لديك فكرة أو مشروع وتريد تحقيقه بميزانية محدودة وثقة. Creavizia هي الشركة الرائدة في مجال التصميم والتطوير.</p>
       </div>
       <div className='flex justify-center items-center gap-2 my-6'>
        
        <Link href='#contact' className='bg-orange-600 hover:bg-orange-700 p-3 text-white  rounded-md font-semibold text-lg'>أطلب موقعك الإلكتروني</Link>
        <Link href='#services' className='bg-white border-[1.5px] hover:bg-orange-600 hover:text-white   p-3 rounded-md border-gray-300 hover:text-black font-semibold text-lg text-gray-900'>خدماتنا</Link>
       </div>
    </div>
  )
}

export default Hero
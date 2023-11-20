
import React from 'react'
import { sendEmail } from '../sendEmail'



const Contact = () => {
  return (
    <div id='contact' className='mx-6 p-7 rotate-3 hover:rotate-0 mt-24 lg:mt-24 transition-all duration-300 lg:mx-14 lg:py-16 px-10 bg-[url("/square.svg")]  bg-bottom bg-orange-600 rounded-md lg:flex  gap-8 justify-between items-center h-fit '>
      <div className='lg:w-1/2 w-full'>
        <h1 className='text-white text-5xl font-bold leading-relaxed tracking-wide'>دعونا نصنع شيئًا فريدًا</h1>
        <div>
          <p className='text-white font-semibold text-lg py-7'>يمكنك الإتصال بنا على الرقم : 88 96 73 56 06</p>
        </div>
      </div>
      <div className='lg:w-1/2 w-full'>
        <form action={async FormData => {  await sendEmail(FormData)}
       } 
          className='flex flex-col gap-2'>
          <input name="nom"  required className='p-4 rounded-md outline-none focus:outline-none' type='text' placeholder='الإسم الكامل' />
          <input name='tel' required className='p-4 rounded-md outline-none focus:outline-none' type='text' placeholder='رفم الهاتف' />
          <input name='email' required className='p-4 rounded-md outline-none focus:outline-none' type='email' placeholder='بريدك الإلكتروني' />
          <button type='submit' className='py-4 rounded-md hover:bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 hover:text-white hover:border-2 border-white transition-colors duration-300 bg-gray-800 font-bold text-lg tracking-wider text-white'>أرسل لنا</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
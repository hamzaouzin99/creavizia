'use client'
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'
import { RiWhatsappFill } from 'react-icons/ri'
import Link from 'next/link'


const Notification = () => {

  const [close,SetClose] = useState(false)

  return (
    <div className={close ? "hidden" : "text-sm lg:text-base font-light tracking-wide flex justify-between items-center p-4 border-b-[1.5px] border-gray-200"} >
      <div className='flex justify-center items-center text-center mx-auto gap-2'>
      <div className=''><RiWhatsappFill className='text-green-600' size={23}/></div>
      <p className='text-center  font-bold'><Link target="_blank" className='text-green-700' href='https://wa.me/212656738896'>06 56 73 88 96</Link> :  للطلب أو الإستشارة إتصل على الرقم  </p>
      </div>
      
        <AiOutlineClose className='cursor-pointer lg:mr-10 hover:text-[#D6401F]' onClick={()=>SetClose(true)} />
    </div>
  )
}

export default Notification
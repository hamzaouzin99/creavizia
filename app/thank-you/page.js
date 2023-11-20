
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { useSearchParams } from 'next/navigation'




const page = () => {
 /* const searchParams = useSearchParams()
  const nom = searchParams.get('nom')*/

  return (
    <>
    
    <CiCircleCheck size={120} className='text-center mt-16 mx-auto text-green-700' />

    <div className='h-48 w-full flex justify-center items-center font-bold text-2xl lg:text-4xl'>شكرا لإرسالك لنا سنتصل بك قريبا </div>
</>
  )
}

export default page
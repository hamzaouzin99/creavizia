import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className='bg-black   py-16  h-fit text-white'>
        <p className='text-center text-4xl leading-normal  capitalize font-bold lg:text-5xl  py-8 h1'>شركائنا</p>
        <div className='flex flex-wrap justify-center items-center gap-2'>
           <Image src='/partnerOne.png' width={150} height={120} alt="" />
           <Image src='/partnerFour.png' width={150} height={120} alt="" />

           <Image src='/partnerSix.png' width={120} height={100} alt="" />
           <Image src='/partnerSeven.png' width={120} height={100} alt="" />

           <Image src='/partnerFive.png' width={150} height={120} alt="" />

           <Image src='/partnerThree.png' width={150} height={120} alt="" />


        </div>
    </div>
  )
}

export default Partners
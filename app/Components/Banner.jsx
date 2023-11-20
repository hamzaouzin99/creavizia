import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='mt-28 ' >
        <div >
        <Image src='/banner.png' alt='Creavizia Design Your Website' className='  object-cover' width={13660} height={768}/>
        </div>
        
    </div>
  )
}

export default Banner
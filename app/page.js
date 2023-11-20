'use client'
import Image from 'next/image'
import Hero from './Components/Hero'
import Banner from './Components/Banner'
import Partners from './Components/Partners'
import Services from './Components/Services'
import FeaturedWork from './Components/FeaturedWork'
import Contact from './Components/Contact'
import Context, { SideBar } from './Context/Context'
import { useContext } from 'react'
import MenuSide from './Components/MenuSide'
import Footer from './Components/Footer'
import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri'
import next from "next"



export default function Home() {
  const {open} = useContext(SideBar)

  
  return (
    <div className='relative'>
     <Context>
    {/*!open ? <MenuSide/> : */<>  
    
    <Hero/>
    <Banner/>
    <Partners/>
    <Services/>
    <FeaturedWork/>
    <Contact/>
    <Link href='https://wa.me/212656738896' target='_blank' className=' z-50  fixed bottom-5 right-5'><RiWhatsappFill size={66} className='animate-bounce text-green-600'/></Link>

    </>}
    </Context>
  
  </div>
  )
}

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

import next from "next"
import Head from 'next/head'



export default function Home() {
  const {open} = useContext(SideBar)

  
  return (
    <>
    <Head>
      <script>
        {`
          
         
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K46QRVX8')
`
          
        }
      </script>
    </Head>
    <div className='relative'>
     <Context>
    {/*!open ? <MenuSide/> : */<>  
    
    <Hero/>
    <Banner/>
    <Partners/>
    <Services/>
    <FeaturedWork/>
    <Contact/>

    </>}
    </Context>
  
  </div>
  </>
  )
}

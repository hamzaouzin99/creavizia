import  { Metadata } from 'next'
import './globals.css'
import Notification from './Components/Notification'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri'







export const metadata = {
  title: 'Creavizia',
  
  description:"وكالة متخصصة في تصميم المواقع الإلكترونية و التصميم الكرافيكي و إدارة الإعلانات في مواقع التواصل الإجتماعي"
  ,
  keywords:"Design Website, Wordpress , Website, Developpement , تصميم موقع إلكتروني , موقع إلكتروني,Creavizia,Nextjs,reactjs,php,shopify,agence marketing digital",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
     <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
    <body  className='overflow-x-hidden relative'>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K46QRVX8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <Notification />
      
    <main className="">
      {children}
    </main>
    <Link href='https://wa.me/212656739688' target='_blank' className=' z-50  fixed bottom-16 right-10 lg:bottom-12 lg:right-5'><RiWhatsappFill size={66} className='animate-bounce text-green-600'/></Link>

    <Footer />

    </body>
  </html>
  )
}

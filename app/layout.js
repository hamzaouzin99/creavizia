import  { Metadata } from 'next'
import './globals.css'
import Notification from './Components/Notification'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Script from 'next/script'
import Head from 'next/head'







export const metadata = {
  title: 'Creavizia',
  description:"وكالة متخصصة في تصميم المواقع الإلكترونية و التصميم الكرافيكي و إدارة الإعلانات في مواقع التواصل الإجتماعي"
  ,
  keywords:"Design Website, Wordpress , Website, Developpement , تصميم موقع إلكتروني , موقع إلكتروني,Creavizia,Nextjs,reactjs,php,shopify,agence marketing digital",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
    
    <body  className='overflow-x-hidden'>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K46QRVX8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <Notification />
      
    <main className="">
      {children}
    </main>
    <Footer />

    </body>
  </html>
  )
}

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
    <Head>
      <Script>
        {
          `
         
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K46QRVX8');

          `
        }
      </Script>
    </Head>
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

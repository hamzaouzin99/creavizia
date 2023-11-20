//'use client'
'use server'
import { Resend } from 'resend';
import { redirect } from 'next/navigation'


const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData) =>{
  


    const nom  = formData.get('nom')
    const email  = formData.get('email')

    const tel  = formData.get('tel')

    resend.emails.send({
        from: 'New Order <onboarding@resend.dev>',
        to: 'e.hamzaouzin@gmail.com',
        subject: 'Order From Creavizia',
         html:`Hi Hamza This is The Information Contact Client : ${nom} - ${tel} - ${email}`
      });

      

      redirect('/thank-you')
}
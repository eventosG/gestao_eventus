import React from 'react';
import '../styles/globals.css';
import '../styles/stttyle.css';
import '../styles/styles.scss';
import Provider from '../components/Provider';
import { useState } from 'react';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
    title: "Gestão de Eventos",
    description: "Plataforma de Gestão de Eventos",
}


function RootLayout({children}) {    
  return (
    <html lang='pt'>
        <script src='/mensagem/mensagem.js' defer />     
        <script src='/vendor/snow.js' defer />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <script src="https://assets.codepen.io/11614/iro.min.js"></script>  
        <body>
            <ToastContainer />
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                {children}
            </Provider>
        </body>        
    </html>
  )
}

export default RootLayout;
import React from 'react';
import '../styles/globals.css';
import Nav from '../components/Nav';
import Provider from '../components/Provider';
import Head from "next/head";
import Script from 'next/script';

export const metadata = {
    title: "Gestão de Eventos",
    description: "Plataforma de Gestão de Eventos",
}

function RootLayout({children}) {
  return (
    <html lang='pt'>
        <Script src='/mensagem/mensagem.js' defer />     
        <Script src='/vendor/snow.js' defer />

        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>            
        </body>
    </html>
  )
}

export default RootLayout;
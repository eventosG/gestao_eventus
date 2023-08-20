"use client";
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Head from "next/head";


function Provider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <script src='../mensagem/mensagem.js' defer />
      </Head>      
      {children}
    </SessionProvider>
  )
}

export default Provider
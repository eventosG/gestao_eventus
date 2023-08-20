"use client";
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import Head from "next/head";


function Provider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <Script src='/script.js' />
      </Head>      
      {children}
    </SessionProvider>
  )
}

export default Provider
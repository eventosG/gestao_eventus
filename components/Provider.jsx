"use client";
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script'


function Provider({ children, session }) {
  return (
    <SessionProvider session={session}>
      <Script src='./script.js' />
      {children}
    </SessionProvider>
  )
}

export default Provider
"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sessions from './session/page'
import Navbar from './navbar/page'
import { useEffect,useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JW Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isentered, setIsentered] = useState("");

  useEffect(() => {
    const session = window.sessionStorage;
    const first = session.getItem('enter');

    if (first === 'first') {
      setIsentered('first');
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {
          isentered !== 'first' ? (
            <Sessions setIsentered={setIsentered}></Sessions>
          ) : (
            <>
              <Navbar></Navbar>
              <div>
                {children}
              </div>
            </>
          )
        }
      </body>
    </html>
  )
}


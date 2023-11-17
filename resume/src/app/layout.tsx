import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './navbar/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JW Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
          <div>
          {children}
          </div>
        </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" >
      <body className={`${redHatDisplay.className} bg-black`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

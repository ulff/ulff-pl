import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ulff.pl',
  description: 'Hey, I`m Olaf Gałązka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Alfa Slab One' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Montserrat:bolder' rel='stylesheet' />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script'
})

export const metadata: Metadata = {
  title: 'Kevin & Jaymee - One Year of Love',
  description: 'Celebrating our first anniversary - November 18th. A journey of love, memories, and beautiful moments together.',
  keywords: ['anniversary', 'love story', 'memories', 'celebration'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dancingScript.variable}`}>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50`}>
        {children}
      </body>
    </html>
  )
}
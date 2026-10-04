import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-cursive', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'SKDigital — Website Design & Development',
  description: 'SKDigital designs, develops, and manages modern websites for businesses that want a professional presence online.',
  metadataBase: new URL('https://shivkantkushwaha.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SKDigital — Website Design & Development',
    description: 'SKDigital designs, develops, and manages modern websites for businesses that want a professional presence online.',
    url: 'https://shivkantkushwaha.online',
    siteName: 'SKDigital',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${caveat.variable} font-sans text-foreground bg-background antialiased selection:bg-foreground selection:text-background`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

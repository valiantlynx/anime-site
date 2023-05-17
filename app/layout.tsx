
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeVariant watch anime online free',
  description: 'Watch anime online free in high quality 720p, 1080p english subbed and dubbed on any browser and devices. Watch anime similar to kissanime, 9anime and gogoanime in HTML5 videos format with different anime sources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-base-200`}>
          <Navbar />
        
          {children}
          <Footer />
        
      </body>
    </html>
  )
}

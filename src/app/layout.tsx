import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/lib/ThemeContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdelrahman Younes',
  description: 'Portfolio website showcasing the work and expertise of Abdelrahman Younes, a professional content creator specializing in creative storytelling and digital media.',
  keywords: ['content creator', 'digital media', 'portfolio', 'creative professional', 'Abdelrahman Younes'],
  icons: [
    {
      rel: 'icon',
      url: '/images/logo.png',
      type: 'image/png'
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/logo.png',
      type: 'image/png'
    }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-dark dark:text-gray-100">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 
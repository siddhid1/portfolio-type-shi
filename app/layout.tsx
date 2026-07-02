import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Siddhid Sambrut Dani | Backend Engineer',
  description: 'Backend Engineer building scalable systems, distributed architectures, and production-grade software.',
  generator: 'v0.app',
  openGraph: {
    title: 'Siddhid Sambrut Dani | Backend Engineer',
    description: 'Backend Engineer building scalable systems, distributed architectures, and production-grade software.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddhid Sambrut Dani | Backend Engineer',
    description: 'Backend Engineer building scalable systems, distributed architectures, and production-grade software.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

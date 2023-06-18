import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = 'NEXT PWA Template'
const APP_DESCRIPTION = 'Template for a PWA Aplication'

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: '%s - PWA App'
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  themeColor: '#FFFFFF',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#ffffff" name="theme-color" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

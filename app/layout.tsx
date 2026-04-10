import type { Metadata } from 'next'
import { DM_Mono, Syne } from 'next/font/google'
import './globals.css'

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'razan.dev — Portfolio',
  description: 'Crafting Digital Projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${dmMono.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
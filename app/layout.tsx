import type { Metadata, Viewport } from 'next'
import { Manrope, Prata } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: '--font-manrope',
  display: 'swap',
});

const prata = Prata({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: '--font-prata',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Non-Stop — Премиальная ландшафтная архитектура',
  description: 'Создаём премиальные ландшафты вручную. Индивидуальный дизайн и реализация для частных резиденций в Санкт-Петербурге, Москве и Ереване.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d4a3e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${prata.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

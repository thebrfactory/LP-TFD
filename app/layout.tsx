import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const brother1816 = localFont({
  src: [
    { path: '../public/fonts/Brother1816-Light.woff2',   weight: '300', style: 'normal' },
    { path: '../public/fonts/Brother1816-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Brother1816-Bold.woff2',    weight: '700', style: 'normal' },
    { path: '../public/fonts/Brother1816-Black.woff2',   weight: '900', style: 'normal' },
  ],
  variable: '--font-brother',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://melfiore.com'),
  title: 'MELFIORE — Em breve',
  description: 'Algo está chegando. Cadastre-se e seja o primeiro a saber.',
  openGraph: {
    title: 'MELFIORE — Em breve',
    description: 'Algo está chegando. Cadastre-se e seja o primeiro a saber.',
    type: 'website',
    url: 'https://melfiore.com',
    siteName: 'MELFIORE',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MELFIORE — Em breve',
    description: 'Algo está chegando. Cadastre-se e seja o primeiro a saber.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  alternates: {
    canonical: 'https://melfiore.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={brother1816.variable}>
      <body className="font-brand bg-brand-bg min-h-screen">
        {children}
      </body>
    </html>
  )
}

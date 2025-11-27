export const metadata = {
  title: 'Masjid Kita',
  description: 'Aplikasi Jadwal Shalat Digital',
}

import './globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Masjid Kita',
  description: 'Aplikasi Jadwal Shalat Digital',
}

import './globals.css'
import type { ReactNode } from 'react'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-green-700">Masjid Kita</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/" className="text-gray-700 hover:text-green-700">Beranda</Link>
              <Link href="/jadwal" className="text-gray-700 hover:text-green-700">Jadwal</Link>
              <Link href="/iqomah?duration=10&prayer=dhuhr" className="text-gray-700 hover:text-green-700">Timer Iqomah</Link>
              <Link href="/iqomah/settings" className="text-gray-700 hover:text-green-700">Pengaturan Iqomah</Link>
              <Link href="/admin" className="text-gray-700 hover:text-green-700">Admin</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}

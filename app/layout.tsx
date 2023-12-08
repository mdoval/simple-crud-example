import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple Crud en Next',
  description: 'Aplicacion de pruebas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

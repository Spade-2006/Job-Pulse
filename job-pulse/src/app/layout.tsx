import type { Metadata } from 'next'
import './(pubic)/global.css'

export const metadata: Metadata = {
  title: 'Job Pulse',
  description: 'Track and improve your job search.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

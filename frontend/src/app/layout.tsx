import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GPT-4o Chat App',
  description: 'Chat application with GPT-4o integration',
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
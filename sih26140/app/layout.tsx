import type { Metadata } from 'next'
import './globals.css'
import TopNavigationBar from '@/components/TopNavigationBar'

export const metadata: Metadata = {
  title: 'QuantumLearn',
  description: 'Enterprise-grade quantum computing simulation and educational platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased h-screen w-screen overflow-hidden flex flex-col bg-background text-zinc-200">
        <TopNavigationBar />
        <main className="flex-1 flex overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}

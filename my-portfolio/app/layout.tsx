import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/sections/Navbar'

export const metadata: Metadata = {
    title: 'Tyron Gysbertha – Portfolio',
    description: 'Test-automation engineer en developer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="nl">
        <body className="bg-blue-100 text-gray-600 font-sans">
        <main className="pt-16">{children}</main>
        <footer className="text-center text-gray-500 py-6 text-sm">
            © 2026 Tyron Gysbertha – Alle rechten voorbehouden
        </footer>
        </body>
        </html>
    )
}
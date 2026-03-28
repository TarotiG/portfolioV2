'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
    const [active, setActive] = useState('')

    useEffect(() => {
        const sections = ['about', 'projects', 'certificates', 'contact']
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { threshold: 0.5 }
        )

        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const links = [
        { href: '#about', label: 'Over mij' },
        { href: '#projects', label: 'Projecten' },
        { href: '#certificates', label: 'Certificaten' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-0 w-full bg-blue-200 shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="font-bold text-gray-600 text-lg">Tyron Gysbertha - Test automation engineer and developer</span>
                <div className="flex gap-6 text-sm">
                    {links.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        className={`transition font-medium ${
                        active === link.href.replace('#', '')
                        ? 'text-blue-600 font-bold'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                        >
                        </a>
                        ))}
                </div>
            </div>
        </nav>
    )
}
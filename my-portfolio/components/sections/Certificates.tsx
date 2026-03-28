'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Certificate } from '@prisma/client'

type Props = {
    certificates: Certificate[]
}

export default function Certificates({ certificates }: Props) {
    const [current, setCurrent] = useState(0)

    function prev() {
        setCurrent((i) => (i === 0 ? certificates.length - 1 : i - 1))
    }

    function next() {
        setCurrent((i) => (i === certificates.length - 1 ? 0 : i + 1))
    }

    return (
        <section id="certificates" className="py-16 bg-blue-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-8">📜 Behaalde certificaten</h2>

                {certificates.length === 0 ? (
                    <p className="text-gray-500">Nog geen certificaten toegevoegd.</p>
                ) : (
                    <div className="relative">
                        {/* Certificaat afbeelding */}
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={`/api/certificates/${certificates[current].id}/image`}
                                alt={certificates[current].name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Naam en datum */}
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-gray-700">
                                {certificates[current].name}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">
                                {new Date(certificates[current].issueDate).toLocaleDateString('nl-NL')}
                            </p>
                            <p className="text-gray-600 mt-2">{certificates[current].description}</p>
                        </div>

                        {/* Navigatie knoppen */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/3 -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-full shadow transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/3 -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-full shadow transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {certificates.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-3 h-3 rounded-full transition ${
                                        i === current ? 'bg-blue-500' : 'bg-blue-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
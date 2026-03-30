'use client'

import { useState } from 'react'
import Image from 'next/image'

type FlipCardProps = {
    title: string
    imageSrc: string
    imageAlt: string
    backTitle: string
    backDescription: string
    backPoints: string[]
    offsetTop?: boolean
}

function FlipCard({
                      title,
                      imageSrc,
                      imageAlt,
                      backTitle,
                      backDescription,
                      backPoints,
                      offsetTop = false,
                  }: FlipCardProps) {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className={`flip-card ${flipped ? 'flipped' : ''} ${offsetTop ? 'mt-12' : ''}`}
            onClick={() => setFlipped(!flipped)}
            style={{
                boxShadow:
                    '0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -1px rgba(0,0,0,0.2)',
            }}
        >
            <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-blue-300 text-white p-6 flex flex-col items-center justify-center">
                    <h3 className="text-xl text-center font-bold mb-4">{title}</h3>
                    <Image src={imageSrc} alt={imageAlt} width={120} height={120} className="mb-4" />
                    <p className="text-blue-100 text-center text-sm">Klik voor meer info →</p>
                </div>

                {/* Back */}
                <div className="flip-card-back bg-blue-300 text-white p-6 overflow-y-auto">
                    <h3 className="text-xl font-bold mb-3">{backTitle}</h3>
                    <p className="text-gray-100 text-sm mb-4">{backDescription}</p>
                    <ul className="text-gray-100 text-sm space-y-2">
                        {backPoints.map((point) => (
                            <li key={point}>✓ {point}</li>
                        ))}
                    </ul>
                    <p className="text-blue-100 text-center text-sm mt-4">← Klik om terug te gaan</p>
                </div>
            </div>
        </div>
    )
}

const cards = [
    {
        title: 'TMAP Gecertificeerd',
        imageSrc: '/flipcards/TMAP-certified.png',
        imageAlt: 'TMAP',
        backTitle: 'TMAP Certificaat',
        backDescription:
            'Professioneel gecertificeerd in TMAP Next methodologie voor testbeheer en kwaliteitsborging.',
        backPoints: [
            'Test strategie & planning',
            'Risico-gebaseerd testen',
            'Testontwerp technieken',
        ],
        offsetTop: false,
    },
    {
        title: 'Technisch en ervaren',
        imageSrc: '/flipcards/technical-experienced.png',
        imageAlt: 'Technical',
        backTitle: 'Ervaring & Expertise',
        backDescription:
            'Jarenlange ervaring in softwareontwikkeling en test-automatisering met moderne technologieën.',
        backPoints: [
            '.NET & C# ontwikkeling',
            'Test automation frameworks',
            'CI/CD pipelines',
            'Cloud technologieën',
        ],
        offsetTop: true,
    },
    {
        title: 'Vooruitstrevende mindset',
        imageSrc: '/flipcards/progressive-mindset.png',
        imageAlt: 'Progressive',
        backTitle: 'Innovatie & Groei',
        backDescription:
            'Continue focus op nieuwe technologieën en best practices om voorop te blijven lopen.',
        backPoints: [
            'Agile & DevOps mindset',
            'Continuous learning',
            'Early adopter nieuwe tech',
            'Innovatieve oplossingen',
        ],
        offsetTop: false,
    },
    {
        title: 'Quality above all',
        imageSrc: '/flipcards/quality-above-all.png',
        imageAlt: 'Quality',
        backTitle: 'Kwaliteit Voorop',
        backDescription:
            'Gedreven door het leveren van hoogwaardige software door middel van grondige testing en code review.',
        backPoints: [
            'Code quality standards',
            'Automated testing',
            'Performance optimization',
            'Security best practices',
        ],
        offsetTop: true,
    },
]

export default function AboutMe() {
    return (
        <section id="about" className="py-16 bg-blue-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">👨‍💻 Over mij</h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Links: tekst */}
                    <div className="flex-1">
                        <p className="text-lg font-bold">
                            Hier komt jouw "over mij" tekst. Dit wordt later dynamisch vanuit de database geladen.
                        </p>
                    </div>

                    {/* Rechts: flip cards grid */}
                    <div className="flex-shrink-0" style={{ width: '40rem' }}>
                        <div className="grid grid-cols-2 gap-6 items-start">
                            {cards.map((card) => (
                                <FlipCard key={card.title} {...card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ```
//
// Kopieer daarna de afbeeldingen uit je oude project naar de `public/` map van je Next.js project. In Next.js gebruik je `public/` in plaats van `wwwroot/`:
// ```
// public/
// └── flipcards/
//     ├── TMAP-certified.png
//     ├── technical-experienced.png
//     ├── progressive-mindset.png
//     └── quality-above-all.png
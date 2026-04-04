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
    return (
        <div
            className={`flip-card ${offsetTop ? 'mt-16' : ''}`}
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
        >
            <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-blue-300 text-white p-8 flex flex-col items-center justify-center">
                    <h3 className="text-2xl text-center font-bold mb-6">{title}</h3>
                    <Image src={imageSrc} alt={imageAlt} width={160} height={160} className="mb-6 object-contain" />
                    <p className="text-blue-100 text-center text-sm">Hover voor meer info →</p>
                </div>

                {/* Back */}
                <div className="flip-card-back bg-blue-400 text-white p-8 overflow-y-auto">
                    <h3 className="text-2xl font-bold mb-4">{backTitle}</h3>
                    <p className="text-blue-50 text-sm mb-6 leading-relaxed">{backDescription}</p>
                    <ul className="text-blue-50 text-sm space-y-3">
                        {backPoints.map((point) => (
                            <li key={point} className="flex items-center gap-2">
                                <span className="text-white font-bold">✓</span> {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const cards = [
    {
        title: 'TMAP Gecertificeerd',
        imageSrc: '/flipcards/TMAP-certified2.png',
        imageAlt: 'TMAP',
        backTitle: 'TMAP Certificaat',
        backDescription: 'Professioneel gecertificeerd in TMAP Next methodologie voor testbeheer en kwaliteitsborging.',
        backPoints: ['Test strategie & planning', 'Risico-gebaseerd testen', 'Testontwerp technieken', 'DevOps & SCRUM', 'SAFe Framework'],
        offsetTop: false,
    },
    {
        title: 'Technisch en ervaren',
        imageSrc: '/flipcards/technical-experienced2.png',
        imageAlt: 'Technical',
        backTitle: 'Ervaring & Expertise',
        backDescription: 'Jarenlange ervaring in softwareontwikkeling en test-automatisering met moderne technologieën.',
        backPoints: ['.NET & C# ontwikkeling', 'Java ontwikkeling', 'Python ontwikkeling', 'Test automation frameworks', 'Microservices', 'CI/CD pipelines', 'Performance testing'],
        offsetTop: true,
    },
    {
        title: 'Vooruitstrevende mindset',
        imageSrc: '/flipcards/progressive-mindset2.png',
        imageAlt: 'Progressive',
        backTitle: 'Innovatie & Groei',
        backDescription: 'Continue focus op nieuwe technologieën en best practices om voorop te blijven lopen.',
        backPoints: ['Agile & DevOps mindset', 'Continuous learning', 'Early adopter van nieuwe technologie', 'Innovatieve oplossingen', 'Kwalitatieve toepassingen vinden voor GenAI'],
        offsetTop: false,
    },
    {
        title: 'Quality above all',
        imageSrc: '/flipcards/quality-above-all2.png',
        imageAlt: 'Quality',
        backTitle: 'Kwaliteit Voorop',
        backDescription: 'Gedreven door het leveren van hoogwaardige software door middel van grondige testing en code review.',
        backPoints: ['Code quality standards', 'Sustainable automated testing', 'Performance optimization', 'Security best practices', 'Continuous improvement'],
        offsetTop: true,
    },
    {
        title: 'Flexible in Tooling',
        imageSrc: '/flipcards/diverse-tooling.png',
        imageAlt: 'Tooling',
        backTitle: 'Tooling',
        backDescription: 'Ervaren in diverse tooling om te helpen bij het ontwikkelen en onderhouden van software.',
        backPoints: ['Selenium, Robot Framework, Playwright', 'ASP.NET', 'Spring', 'Gatling, JMeter', 'Postman, Bruno, SoapUI'],
        offsetTop: false,
    },
    {
        title: 'Creative mindset',
        imageSrc: '/flipcards/innovative-creative2.png',
        imageAlt: 'Creative',
        backTitle: 'Creatiive mindset',
        backDescription: 'Ik ben altijd op zoek naar nieuwe manieren om problemen op te lossen en nieuwe oplossingen te ontwikkelen.',
        backPoints: ['Innovative problem-solving', 'Creative thinking', 'Problem-solving mindset', 'Continuous learning', 'Continuous improvement'],
        offsetTop: true,
    },
    {
        title: 'Teamplayer',
        imageSrc: '/flipcards/teamplayer2.png',
        imageAlt: 'Teamplayer',
        backTitle: 'Teamplayer',
        backDescription: 'Ik werk goed met andere mensen en ben altijd bereid om te helpen en te ondersteunen.',
        backPoints: ['Collaborative mindset', 'Teamwork', 'Communication skills', 'Conflict resolution', 'Adaptability'],
        offsetTop: false,
    },
    {
        title: 'About me',
        imageSrc: '/flipcards/avatar.png',
        imageAlt: 'About me',
        backTitle: 'About me',
        backDescription: 'Ik ben enorme foodie en ben altijd op zoek naar nieuwe eetervaringen! Ook hou ik van reizen; het is een doel van mij om zoveel mogelijk landen te zien. Thuis kijk ik graag Anime en lees ik diverse manga\'s en zwem ik ook heel graag!',
        backPoints: ['Foodie', 'Reizen', 'Anime', 'Zwemmen'],
        offsetTop: true,
    }
]

export default function AboutMe() {
    return (
        <section id="about" className="py-20 bg-blue-100">
            <div className="max-w-6xl mx-auto px-6">
                {/*<h2 className="text-3xl font-semibold mb-16 text-center">👨‍💻 Over mij</h2>*/}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                    {cards.map((card) => (
                        <FlipCard key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}
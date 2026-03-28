import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import Projects from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'
import { prisma } from '@/lib/prisma'

export default async function Home() {
    const [projects, certificates] = await Promise.all([
        prisma.project.findMany({
            include: { technologies: true },
            orderBy: { createdAt: 'desc' },
        }),
        prisma.certificate.findMany({
            orderBy: { issueDate: 'desc' },
        }),
    ])

    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects projects={projects} />
            <Certificates certificates={certificates} />
            <Contact />
        </>
    )
}
import { prisma } from '@/lib/prisma'
import ProjectForm from '@/components/admin/ProjectForm'
import CertificateForm from '@/components/admin/CertificateForm'
import ProjectList from '@/components/admin/ProjectList'
import CertificateList from '@/components/admin/CertificateList'

export default async function AdminPage() {
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
        <div className="space-y-12">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            {/* Projecten */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    📁 Projecten
                </h2>
                <ProjectForm />
                <ProjectList projects={projects} />
            </section>

            {/* Certificaten */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    📜 Certificaten
                </h2>
                <CertificateForm />
                <CertificateList certificates={certificates} />
            </section>
        </div>
    )
}
'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import type { ProjectFormData, CertificateFormData } from '@/types'

// ========================
// Project actions
// ========================

export async function addProject(data: ProjectFormData) {
    await prisma.project.create({
        data: {
            name: data.name,
            description: data.description,
            function: data.function,
            startDate: new Date(data.startDate),
            endDate: data.endDate ? new Date(data.endDate) : null,
            personalProject: data.personalProject,
            technologies: {
                create: data.technologies.map((name) => ({ technologyName: name })),
            },
        },
    })
    revalidatePath('/')
}

export async function deleteProject(id: string) {
    await prisma.project.delete({ where: { id } })
    revalidatePath('/')
}

// ========================
// Certificate actions
// ========================

export async function addCertificate(formData: FormData) {
    const file = formData.get('file') as File
    const fileBuffer = Buffer.from(await file.arrayBuffer())

    await prisma.certificate.create({
        data: {
            name: formData.get('name') as string,
            description: formData.get('description') as string,
            issueDate: new Date(formData.get('issueDate') as string),
            fileName: file.name,
            fileType: file.type,
            fileData: fileBuffer,
        },
    })
    revalidatePath('/')
}

export async function deleteCertificate(id: string) {
    await prisma.certificate.delete({ where: { id } })
    revalidatePath('/')
}
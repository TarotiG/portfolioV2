import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params

    const certificate = await prisma.certificate.findUnique({
        where: { id },
    })

    if (!certificate) {
        return new Response('Niet gevonden', { status: 404 })
    }

    return new Response(certificate.fileData, {
        headers: {
            'Content-Type': certificate.fileType,
            'Cache-Control': 'public, max-age=3600',
        },
    })
}
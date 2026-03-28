'use client'

import { deleteCertificate } from '@/app/admin/actions'
import type { Certificate } from '@prisma/client'

type Props = {
    certificates: Certificate[]
}

export default function CertificateList({ certificates }: Props) {
    if (certificates.length === 0) {
        return <p className="text-gray-500 text-sm">Nog geen certificaten toegevoegd.</p>
    }

    return (
        <div className="space-y-3">
            {certificates.map((cert) => (
                <div
                    key={cert.id}
                    className="bg-gray-900 p-4 rounded-lg flex justify-between items-start"
                >
                    <div>
                        <h4 className="font-semibold text-white">{cert.name}</h4>
                        <p className="text-gray-400 text-sm">{cert.description}</p>
                        <p className="text-gray-500 text-xs mt-1">
                            {new Date(cert.issueDate).toLocaleDateString('nl-NL')}
                        </p>
                    </div>
                    <button
                        onClick={() => deleteCertificate(cert.id)}
                        className="text-red-400 hover:text-red-300 text-sm ml-4 shrink-0 transition"
                    >
                        Verwijderen
                    </button>
                </div>
            ))}
        </div>
    )
}
'use client'

import { useState } from 'react'
import { addCertificate } from '@/app/admin/actions'

export default function CertificateForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        await addCertificate(formData)

        setLoading(false)
        setSuccess(true)
        e.currentTarget.reset()
        setTimeout(() => setSuccess(false), 3000)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg mb-8 space-y-4">
            <h3 className="text-lg font-semibold text-white">Nieuw certificaat toevoegen</h3>

            {/* Naam */}
            <div>
                <label className="block text-sm text-gray-400 mb-1">Naam</label>
                <input
                    name="name"
                    required
                    className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Beschrijving */}
            <div>
                <label className="block text-sm text-gray-400 mb-1">Beschrijving</label>
                <textarea
                    name="description"
                    required
                    rows={3}
                    className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Datum */}
            <div>
                <label className="block text-sm text-gray-400 mb-1">Datum behaald</label>
                <input
                    name="issueDate"
                    type="date"
                    required
                    className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Bestand */}
            <div>
                <label className="block text-sm text-gray-400 mb-1">
                    Certificaat bestand (afbeelding of PDF)
                </label>
                <input
                    name="file"
                    type="file"
                    required
                    accept="image/*,application/pdf"
                    className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-blue-600 file:text-white file:text-sm"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded transition"
            >
                {loading ? 'Opslaan...' : 'Certificaat toevoegen'}
            </button>

            {success && (
                <p className="text-green-400 text-sm text-center">✓ Certificaat succesvol toegevoegd!</p>
            )}
        </form>
    )
}
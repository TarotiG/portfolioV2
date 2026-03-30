'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const form = e.currentTarget
        const result = await signIn('credentials', {
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            password: (form.elements.namedItem('password') as HTMLInputElement).value,
            redirect: true,
        })

        setLoading(false)

        // @ts-ignore
        if (!result || result.error) {
            setError('Ongeldige inloggegevens')
            return
        }

        router.refresh()           // ← sessie opfrissen
        router.push('/admin')
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    Admin inloggen
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Wachtwoord</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded transition"
                    >
                        {loading ? 'Inloggen...' : 'Inloggen'}
                    </button>
                </form>
            </div>
        </div>
    )
}
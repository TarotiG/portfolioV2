'use client'

import { useState } from 'react'
import { addProject } from '@/app/admin/actions'
import type { ProjectFormData } from '@/types'

export default function ProjectForm() {
    const [technologies, setTechnologies] = useState<string[]>([''])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    function addTechnologyField() {
        setTechnologies([...technologies, ''])
    }

    function updateTechnology(index: number, value: string) {
        const updated = [...technologies]
        updated[index] = value
        setTechnologies(updated)
    }

    function removeTechnology(index: number) {
        setTechnologies(technologies.filter((_, i) => i !== index))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget
        const data: ProjectFormData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
            function: (form.elements.namedItem('function') as HTMLInputElement).value,
            startDate: (form.elements.namedItem('startDate') as HTMLInputElement).value,
            endDate: (form.elements.namedItem('endDate') as HTMLInputElement).value || undefined,
            personalProject: (form.elements.namedItem('personalProject') as HTMLInputElement).checked,
            technologies: technologies.filter((t) => t.trim() !== ''),
        }

        await addProject(data)
        setLoading(false)
        setSuccess(true)
        form.reset()
        setTechnologies([''])
        setTimeout(() => setSuccess(false), 3000)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg mb-8 space-y-4">
            <h3 className="text-lg font-semibold text-white">Nieuw project toevoegen</h3>

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

            {/* Functie */}
            <div>
                <label className="block text-sm text-gray-400 mb-1">Functie</label>
                <input
                    name="function"
                    required
                    className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Periode */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Startdatum</label>
                    <input
                        name="startDate"
                        type="date"
                        required
                        className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Einddatum (optioneel)</label>
                    <input
                        name="endDate"
                        type="date"
                        className="w-full bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Technologieën */}
            <div>
                <label className="block text-sm text-gray-400 mb-1">Technologieën</label>
                <div className="space-y-2">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                value={tech}
                                onChange={(e) => updateTechnology(index, e.target.value)}
                                placeholder="bijv. React, TypeScript"
                                className="flex-1 bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {technologies.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeTechnology(index)}
                                    className="text-red-400 hover:text-red-300 px-2"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={addTechnologyField}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300"
                >
                    + Technologie toevoegen
                </button>
            </div>

            {/* Persoonlijk project */}
            <div className="flex items-center gap-2">
                <input
                    name="personalProject"
                    type="checkbox"
                    id="personalProject"
                    className="w-4 h-4 accent-blue-500"
                />
                <label htmlFor="personalProject" className="text-sm text-gray-400">
                    Persoonlijk project
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded transition"
            >
                {loading ? 'Opslaan...' : 'Project toevoegen'}
            </button>

            {success && (
                <p className="text-green-400 text-sm text-center">✓ Project succesvol toegevoegd!</p>
            )}
        </form>
    )
}
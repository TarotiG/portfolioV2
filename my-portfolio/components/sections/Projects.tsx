'use client'

import { useState } from 'react'
import type { Project, Technology } from '@prisma/client'

type ProjectWithTechnologies = Project & {
    technologies: Technology[]
}

type Props = {
    projects: ProjectWithTechnologies[]
}

export default function Projects({ projects }: Props) {
    const [selected, setSelected] = useState<ProjectWithTechnologies | null>(null)

    function showDetail(project: ProjectWithTechnologies) {
        setSelected(project)
        setTimeout(() => {
            document.getElementById('project-detail')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }, 100)
    }

    function exitDetail() {
        setSelected(null)
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <section id="projects" className="py-16 bg-blue-100">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-semibold mb-8 text-center">
                    📁 Uitgelichte projecten
                </h3>

                {/* Project grid */}
                <div
                    id="list-projecten"
                    className={`grid md:grid-cols-2 gap-8 transition-all duration-500 ${
                        selected ? 'hidden' : ''
                    }`}
                >
                    {projects.length === 0 && (
                        <p className="text-gray-500 col-span-2 text-center">
                            Nog geen projecten toegevoegd.
                        </p>
                    )}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card bg-blue-200 p-6 rounded-lg shadow-md"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold">{project.name}</h4>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                                        project.personalProject
                                            ? 'bg-blue-400 text-white'
                                            : 'bg-gray-600 text-white'
                                    }`}
                                >
                  {project.personalProject ? 'Persoonlijk' : 'Zakelijk'}
                </span>
                            </div>
                            <p className="text-gray-700 mt-2">{project.description}</p>
                            <button
                                onClick={() => showDetail(project)}
                                className="text-blue-700 hover:underline mt-3 inline-block font-medium"
                            >
                                Bekijk project →
                            </button>
                        </div>
                    ))}
                </div>

                {/* Project detail */}
                <div
                    id="project-detail"
                    className={`mt-8 transition-all duration-500 ${
                        selected ? 'show' : 'hidden'
                    }`}
                >
                    {selected && (
                        <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
                            {/* Header */}
                            <div className="bg-blue-200 p-6 border-b border-blue-300">
                                <h4 className="text-3xl font-bold text-gray-700">
                                    {selected.name}
                                </h4>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                        Beschrijving
                                    </h5>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {selected.description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Functie */}
                                    <div className="bg-blue-200 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Functie
                                        </h5>
                                        <p className="text-gray-600 font-medium">{selected.function}</p>
                                    </div>

                                    {/* Technologieën */}
                                    <div className="bg-blue-200 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Technologieën
                                        </h5>
                                        <p className="text-gray-600 font-medium">
                                            {selected.technologies.map((t) => t.technologyName).join(', ')}
                                        </p>
                                    </div>

                                    {/* Periode */}
                                    <div className="bg-blue-200 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Periode
                                        </h5>
                                        <p className="text-gray-600 font-medium">
                                            {new Date(selected.startDate).toLocaleDateString('nl-NL')} –{' '}
                                            {selected.endDate
                                                ? new Date(selected.endDate).toLocaleDateString('nl-NL')
                                                : 'Heden'}
                                        </p>
                                    </div>

                                    {/* Type */}
                                    <div className="bg-blue-200 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Type
                                        </h5>
                                        <p className="text-gray-600 font-medium">
                                            {selected.personalProject ? 'Persoonlijk project' : 'Zakelijk project'}
                                        </p>
                                    </div>
                                </div>

                                {/* Terug knop */}
                                <div className="pt-4 border-t border-blue-300">
                                    <button
                                        onClick={exitDetail}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                            />
                                        </svg>
                                        Terug naar projecten
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
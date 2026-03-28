'use client'

import { deleteProject } from '@/app/admin/actions'
import type { Project, Technology } from '@prisma/client'

type ProjectWithTechnologies = Project & {
    technologies: Technology[]
}

type Props = {
    projects: ProjectWithTechnologies[]
}

export default function ProjectList({ projects }: Props) {
    if (projects.length === 0) {
        return <p className="text-gray-500 text-sm">Nog geen projecten toegevoegd.</p>
    }

    return (
        <div className="space-y-3">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="bg-gray-900 p-4 rounded-lg flex justify-between items-start"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-white">{project.name}</h4>
                            <span
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                    project.personalProject
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-600 text-white'
                                }`}
                            >
                {project.personalProject ? 'Persoonlijk' : 'Zakelijk'}
              </span>
                        </div>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                        <p className="text-gray-500 text-xs mt-1">
                            {project.technologies.map((t) => t.technologyName).join(', ')}
                        </p>
                    </div>
                    <button
                        onClick={() => deleteProject(project.id)}
                        className="text-red-400 hover:text-red-300 text-sm ml-4 shrink-0 transition"
                    >
                        Verwijderen
                    </button>
                </div>
            ))}
        </div>
    )
}
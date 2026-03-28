// Formulier data voor een nieuw project (zonder id, createdAt etc.)
export type ProjectFormData = {
    name: string
    description: string
    function: string
    startDate: string
    endDate?: string
    personalProject: boolean
    technologies: string[] // lijst van namen
}

// Formulier data voor een nieuw certificaat
export type CertificateFormData = {
    name: string
    description: string
    issueDate: string
    file: File
}
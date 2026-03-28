import { signOut } from '@/auth'

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
                <span className="font-bold text-lg">⚙️ Admin Dashboard</span>
                <div className="flex items-center gap-4">
                    <a
                        href="/"
                        className="text-sm text-gray-400 hover:text-white transition"
                        >
                        ← Terug naar portfolio
                    </a>
                <form
                    action={async () => {
                        'use server'
                        await signOut({ redirectTo: '/admin/login' })
                    }}
                >
                    <button
                        type="submit"
                        className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition"
                    >
                        Uitloggen
                    </button>
                </form>
        </div>
</nav>
    <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
</div>
)
}
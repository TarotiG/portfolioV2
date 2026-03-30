import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
import { resolve } from "path";

config({ path: resolve(process.cwd(), '.env.local') })

// Dit is jouw admin account — wachtwoord is gehasht
// Genereer een hash met: node -e "require('bcryptjs').hash('182122portfolio', 10).then(console.log)"
const hash = "$2b$10$NPeYqfEyihQg0P470khAPeYzAWxh0UlhSnKTPZ/dD.JejAiZFBIzq";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Wachtwoord', type: 'password' },
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) return null

                const emailMatch = credentials.email === process.env.AUTH_EMAIL
                console.log(emailMatch);
                const passwordMatch = await bcrypt.compare(
                    credentials.password as string,
                    hash!
                );
                console.log(process.env.AUTH_WACHTWOORD_HASH);
                console.log(passwordMatch);

                if (emailMatch && passwordMatch) {
                    return { id: '1', email: process.env.AUTH_EMAIL, name: 'Admin' }
                }

                return null
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/admin/login',
    },
})
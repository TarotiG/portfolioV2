import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs'

require('dotenv').config();

// Dit is jouw admin account — wachtwoord is gehasht
// Genereer een hash met: node -e "require('bcryptjs').hash('jouwwachtwoord', 10).then(console.log)"
const ADMIN_EMAIL = process.env.AUTH_EMAIL;
const ADMIN_PASSWORD_HASH = process.env.AUTH_WACHTWOORD_HASH;

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Wachtwoord', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const emailMatch = credentials.email === ADMIN_EMAIL
                const passwordMatch = await bcrypt.compare(
                    credentials.password as string,
                    ADMIN_PASSWORD_HASH as string
                )

                if (emailMatch && passwordMatch) {
                    return { id: '1', email: ADMIN_EMAIL, name: 'Admin' }
                }

                return null
            },
        }),
    ],
    pages: {
        signIn: '/admin/login',
    },
})
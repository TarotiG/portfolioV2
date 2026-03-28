// prisma.config.ts
import path from 'node:path';
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
import type { PrismaConfig } from 'prisma'

export default defineConfig({
    schema: path.join('prisma', 'schema.prisma'),
    datasource: {
        url: env('DATABASE_URL'),
    }
}) satisfies PrismaConfig
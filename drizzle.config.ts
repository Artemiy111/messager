import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export default {
	schema: './src/lib/server/db/schema.ts',
	out: './src/lib/server/db/migrations',
	dialect: 'sqlite',
	// dbCredentials: {
	// url: 'file:./src/lib/server/db/sqlite.db'
	// }
	driver: 'turso',
	dbCredentials: {
		url: process.env.DB_URL!,
		authToken: process.env.DB_TOKEN!
	}
} satisfies Config

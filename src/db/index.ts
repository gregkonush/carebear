import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(
  "postgres://carebear:carebear@localhost:5432/carebear"
);

const queryClient = postgres(
  "postgres://carebear:carebear@localhost:5432/carebear"
);

export const db = drizzle(queryClient);

migrate(drizzle(migrationClient), { migrationsFolder: "./src/db/migrations" });

import "https://deno.land/x/dotenv/load.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const database = new Client({
            user: "postgres",
            database: "postgres",
            hostname: "localhost",
            password: "test",
            port: 5432
        });

await database.connect();

export default database;

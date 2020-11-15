import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routes/routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${APP_PORT}`);
await app.listen(`${APP_HOST}:${APP_PORT}`);
// console.log(`Server running on port 4000`);
// await app.listen(`127.0.0.1:$4000`);
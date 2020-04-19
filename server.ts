// @ts-ignore
import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { __ } from 'https://deno.land/x/dirname/mod.ts';
const {__dirname } = __(import.meta);

// @ts-ignore
const env = Deno.env();
const PORT = `127.0.0.1:${env.PORT}`;

const server = new Application()
const router = new Router()
router.get(`*`)

server
  .use(async (cxt: any) => await send(cxt, cxt.request.path, { 
    root: `${__dirname}`,
    index: "index.html"
}))
server.use(router.routes())
  

console.log(`__SERVER_RUNNING__${PORT}`)
await server.listen(PORT);


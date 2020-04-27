// @ts-ignore
import { Application, Router, send } from "https://denopkg.com/Soremwar/oak@v0.41/mod.ts";
import { __ } from 'https://deno.land/x/dirname/mod.ts';
import "https://deno.land/x/dotenv/load.ts";

const {__dirname } = __(import.meta);

console.log(__dirname)
// @ts-ignore
const env = Deno.env();
const HOST_PORT = `127.0.0.1:${env.PORT}`;

const server = new Application()
const router = new Router()

router.get(`*`)
server.use(router.routes())
server
  .use(async (context: any): Promise<any> => {
    await send(context, context.request.path,{ 
    root: `${__dirname}`,
    index: "index.html"
})
})

  

console.log(`__SERVER_RUNNING__${HOST_PORT}`)
await server.listen(`${HOST_PORT}`);


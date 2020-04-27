// @ts-ignore
import { Application, HttpError, Router, Status, send } from "https://denopkg.com/Soremwar/oak@v0.41/mod.ts";
import { __ } from 'https://deno.land/x/dirname/mod.ts';
import "https://deno.land/x/dotenv/load.ts";
const {__dirname } = __(import.meta);

// @ts-ignore
const env = Deno.env();
const HOST_PORT = `127.0.0.1:${env.PORT}`;

const server = new Application()
const router = new Router()

router.get(`*`)
server.use(router.routes())

// Error handler middleware
server.use(async (context: any, next:any) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body = `<!DOCTYPE html>
            <html>
              <body>
                <h1>${e.status} - ${e.message}</h1>
              </body>
            </html>`;
      } else {
        context.response.body = `<!DOCTYPE html>
            <html>
              <body>
                <h1>${e.status} - ${Status[e.status]}</h1>
              </body>
            </html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body = `<!DOCTYPE html>
            <html>
              <body>
                <h1>500 - Internal Server Error</h1>
              </body>
            </html>`;
      console.log(e.stack);
    }
  }
});

server
  .use(async (context: any) => {
    await send(context, context.request.path,{ 
    root: `${__dirname}`,
    index: "index.html"
})
})

  

console.log(`__SERVER_RUNNING__${HOST_PORT}`)
await server.listen(`${HOST_PORT}`);


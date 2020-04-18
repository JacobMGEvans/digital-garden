// @ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts";
import { __ } from 'https://deno.land/x/dirname/mod.ts';
const {__dirname } = __(import.meta);

const PORT = this.env().PORT || 1234;

const server = new Application()

await server.listen(`${PORT}`)
// server()
//   .use(server.path(`${__dirname}/dist`))
//   .get(`*`, (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
//   .listen(PORT, () => console.log(`__SERVER_RUNNING__`, PORT));

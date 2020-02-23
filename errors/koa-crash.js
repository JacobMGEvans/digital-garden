const Koa = require(`koa`);
const Router = require(`@koa/router`);

const app = new Koa();

const commonRouter1 = new Router();
commonRouter1.get(`/ping1-1`, ctx => {
  console.timeLog(`Router 1-1`, ctx);
  ctx.body = `OK`;
});
commonRouter1.get(`/ping1-2`, ctx => {
  console.timeLog(`Router 1-2`, ctx);
  ctx.body = `OK`;
});

const commonRouter2 = new Router();
commonRouter2.get(`/ping2`, ctx => {
  console.timeLog(`Router 2`, ctx);
  ctx.body = `OK`;
});

const commonRouter3 = new Router();
commonRouter3.get(`/ping3`, ctx => {
  console.timeLog(`Router 3`, ctx);
  ctx.body = `OK`;
});

const commonRouter4 = new Router();
commonRouter4.get(`/ping4`, ctx => {
  console.timeLog(`Router 4`, ctx);
  ctx.body = `OK`;
});

const commonRouter5 = new Router();
commonRouter5.get(`/ping5`, ctx => {
  console.timeLog(`Router 5`, ctx);
  ctx.body = `OK`;
});

const apiRouter = new Router();
apiRouter.use(
  `/api`,
  commonRouter1.routes(),
  commonRouter2.routes(),
  commonRouter3.routes(),
  commonRouter4.routes(),
  commonRouter5.routes()
);

app.use(apiRouter.routes());
app.listen(3000, () => console.log(`Ready on http://localhost:3000`));

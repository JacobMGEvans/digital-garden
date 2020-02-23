const express = require(`express`);

const PORT = process.env.PORT || 1234;

express()
  .use(express.static(`${__dirname}/dist`))
  .get(`*`, (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
  .listen(PORT, () => console.log(`__SERVER_RUNNING__`, PORT));

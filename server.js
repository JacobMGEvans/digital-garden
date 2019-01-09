import express from "express";

const app = express();

app.use(`*`, express.static(`/gpujs`));

app.listen(1234);
console.log(`Server Running...`);

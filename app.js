const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const fatiha = await fetch("https://api.alquran.cloud/v1/surah/1");
  const fatihaJson = await fatiha.json()
  ctx.body = fatihaJson;
});

app.listen(3000);

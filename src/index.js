//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const koa = new Koa();
//var router = new Router();

var router = require('./controllers/userController');
//rota simples pra testar se o servidor está online

var routerRoot = require('koa-router')();

routerRoot.get('/', async (ctx) => {
  ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://localhost:3000/
});

koa
  .use(routerRoot.routes())
  .use(routerRoot.allowedMethods())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());
  

const server = koa.listen(PORT);

module.exports = server;
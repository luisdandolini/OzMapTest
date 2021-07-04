var router = require('koa-router')();
var userList = [];

//Uma rota de exemplo simples aqui.
//As rotas devem ficar em arquivos separados, /src/controllers/userController.js por exemplo
router.get('/users', async (ctx) => {
    ctx.status = 200;
    ctx.body = {rows:userList}
});

router.post('/users/create', async (ctx) => {
  var user = ctx.request.body;


  if((user.hasOwnProperty('name', 'email', 'idade')) && (user.idade >= 18) ){
    // se o nome o email e a idade estiverem no body
    // e se a idade for maior que 18
    userList.push(user);
    ctx.response.status = 200;
    ctx.response.body = user;
  }else{
    ctx.response.status = 400;
    ctx.response.body = {error: "invalid data"};
  }
  
});

module.exports = router;


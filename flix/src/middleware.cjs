const cors = require('cors');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

// Usar CORS
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running at http://localhost:3001');
});

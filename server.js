const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middleware);
server.use('',router);


server.listen(process.env.port || 3004,()=>{
    console.log('JSON server is running')
})
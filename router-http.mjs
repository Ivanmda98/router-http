import {createServer} from 'http';

const server = createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>¡Home!");
    }else if(req.url === "/hola"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>¡Hello!");
    }else if(req.url === "/contactos"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>¡Contacts!");
    }else{
        res.writeHead(400, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>¡Not found!");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor web en ejecucion en http://127.0.0.1:3000");
})
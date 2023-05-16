const http = require("http");
const url = require("url");

const port = 8000;

const server = http.createServer((req, res) => {
    const path = req.url;
    if (path == "/") res.end("Server created");
    else if (path == "/Overview") res.end("Server created with  overview");
    else {
        res.writeHead(404);
        res.end("page not found");
    }
});

server.listen(port, "127.0.0.1", () => {
    console.log(`server listening on ${port}`);
});

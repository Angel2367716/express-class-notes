const http = require('http');

const PORT = 3057;

const handleRequest = (request, response) => {
    response.end(`A walk to remember guided by Leo and Max ${request.url}`)
};

const server = http.createServer (handleRequest);

server.listen(PORT, () => console.log (`server is listening on ${PORT}`));
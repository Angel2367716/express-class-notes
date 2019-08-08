// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers: one that listens on port 7000 and one that listens on port 7500.

// * Each server will respond with a different inspirational quote of your choosing.

// **Bonus**

// * Randomly select the quotes from a predefined array.

const http = require ('http');

const PORT = 7000;
const PORT2 = 7500;

const handleRequest = (request, response) => {
    response.end(`A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. - Paul Graham ${request.url}`);
}
const handleRequest2 = (request, response) => {
    response.end(`Don't comment bad code - rewrite it. - Brian Kernighan ${request.url}`);
}


const server = http.createServer ( handleRequest);
const server2 = http.createServer ( handleRequest2);

server.listen(PORT, ()=> console.log (`server is listening on ${PORT}`));
server2.listen(PORT2, ()=> console.log (`server is listening on ${PORT2}`));
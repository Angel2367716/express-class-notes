// Dependencies
const http = require("http");
const fs = require("fs");

// Set our port to 7070
const PORT = 7070;

const handleRequest =(req, res) => {
    const path =req.url;

    switch(path) {
      case "/food":
      case "/movies":
      case "/framework":
        return serveHTML(`${path}.html`, res);
      default:
        return serveHTML('/index.html', res);
    }
  }
  
  const serveHTML = (filePath, res)=>{
    return fs.readFile(__dirname + filePath, (err, data)=>{
      if (err) throw err; 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

  // Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, ()=> console.log(`Server is listenning on PORT: ` + PORT))

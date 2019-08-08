// # **Instructions**

// * Create a website with four routes:
//   * Home
//   * Favorite Foods
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Each route should be triggered by a different URL.
// * Each route should display an HTML page listing your favorite three things of each.
// * Be sure to use `fs` to serve your HTML files.

// ## Bonuses
// * Have your home page have links to all of your other pages.
// * DRY up your code by only having a single `readFile`

const http = require("http");
const fs = require("fs");

const PORT = 9090;
const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server is listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {
    //FS package is used to read the index.html file
    // fs.readfile(__dirname + "/index.html", function (err, data){
    //     //here we tell the browser that we are going to send an html file to it
    //     res.writeHead(200, {"Content-Type":"text/html"});
    //     res.end(data);
    // });
    //captures the url the request is made to 
    const path = req.url;
    switch (path) {
        case "/": return displayRoot(path, req, res);
        case "/Favorite-Food": return displayFood(path, req, res);
        case "/Favorite-Movies": return displayMovies(path, req, res);
        case "/Favorite-CSS-Framework": return displayCSS(path, req, res);
        default: return display404(path, req, res);
    };
}

//function runs when localhost 9090 is visited
function displayRoot(path, req, res) {
    const myHTML = "<html>" + "<body><h1>Home Page</h1>" +
        "<a href= '/Favorite-Food'>Favorite Foods</a>" + "<br>" +
        "<a href= '/Favorite-Movies'>Favorite Movies</a>" + "<br>" +
        "<a href= '/Favorite-CSS-Framework'>Favorite CSS Frameworks</a>" + "<br>" +
        "</body></html>";

    //status code 200, meaning everything went ok
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function displayFood(url, req, res) {
    const myHTML = "<html>" + "<body><h1>Favorite Foods</h1>" +
        "<a href= '/'>Return</a>" + "<br>" +
        "<h2>Here are some foods I like</h2><ul><li>Sushi Rolls</li><li>Paella</li><li>Chicken Alfredo</li></ul>"
    + "<br></body></html>";

    //status code 200, meaning everything went ok
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}
//displayMovies
function displayMovies(url, req, res) {
    const myHTML = "<html>" + "<body><h1>Favorite Movies</h1>" +
        "<a href= '/'>Return</a>" + "<br>" +
        "<h2>Here are some movies I like</h2><ul><li>Harry Potter</li><li>Endgame</li><li>El laberinto del fauno</li></ul>"
    + "<br></body></html>";

    //status code 200, meaning everything went ok
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

//displayCSS
function displayCSS(url, req, res) {
    const myHTML = "<html>" + "<body><h1>Favorite CSS Frameworks</h1>" +
        "<a href= '/'>Return</a>" + "<br>" +
        "<h2>Here my favorite CSS Frameworks to work with</h2><ul><li>Bootstrap</li><li>Materialize</li><li>Sass</li></ul>"
    + "<br></body></html>";

    //status code 200, meaning everything went ok
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

//display404
function display404(url, req, res) {
    const myHTML = "<html>" + "<body><h1>404 Not Found</h1>" +
        "<p>The page you were looking for: " + url + "cannot be found </p>"
        + "</body></html>";

    //status code 404, meaning page couldn't be found
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
res.end(`
    <h1>Hello from Jenkins CI/CD </h1>
    <p>Automatically deployed by Jenkins + Docker.</p>
`);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
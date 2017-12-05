const http = require("http");
const router = require("./router");

const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";

const server = http.createServer(router);
server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

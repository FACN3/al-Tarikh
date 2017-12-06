const handler = require("./handler");
const qs = require("querystring");

const router = (req, res) => {
  var url = req.url;
  var method = req.method;
  console.log(url);
  if (url === "/" || url.includes("/public")) {
    handler.publicHandler(req, res);
  } else if (url === "/users") {
    handler.getData((err, users) => {
      if (err) {
        console.log("router error: " + err);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Erroooooooooor");
      } else {
        res.writeHead(200, {
          Location: "/",
          "Content-Type": "application/json"
        });
        console.log("the users res frob backend ", JSON.stringify(users));

        res.end(users);
      }
    });
  } else if (url === "/postdata" && method === "POST") {
    let data = "";

    req.on("data", chunk => {
      data += chunk;
    });

    req.on("end", () => {
      const parsedData = qs.parse(data);
      console.log(parsedData);
      const name = parsedData.name;
      const title = parsedData.title;
      const description = parsedData.description;
      const dt = parsedData.date;

      handler.postData(name, title, description, dt,(err, result) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end(err);
        }

        console.log("User inserted into the database", result);
        res.writeHead(302, {
          Location: "/",
          "Content-Type": "application/json"
        });
        res.end();
      });
    });
  } else {
    res.end("errorrrrr");
  }
};

module.exports = router;

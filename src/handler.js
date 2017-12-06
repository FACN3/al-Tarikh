const fs = require("fs");
const path = require("path");
const connect = require("../database/db_connection");

const publicHandler = (req, res) => {
  var url = req.url;
  if(url === '/'){
    url = '/public/index.html'
  }
  var parts = url.split(".")[1];
  var extensionType = {
    css: "text/css",
    html: "text/html",
    js: "application/javascript",
    ico: "image/x-icon",
    json: "application/json"
  }[parts];
  fs.readFile(path.join(__dirname, "..", url), (err, data) => {
    if(err){
      res.writeHead(500, {"Content-Type": "text/html"});
      console.log(err);
      return res.end("Internal Server Erroooor");
    }
      res.writeHead(200, {"Content-Type": extensionType});
    res.end(data);
  });
}

const getData = (cb) => {
  connect.query(`SELECT name FROM users`, (err, users) => {
    if(err){
      console.log(err + "get data didnt work");
      cb(err);
    }
    const data = users.rows;
    cb(null, data);
  });

}

const postData = (name,cb)=>{
  connect.query(`INSERT INTO users(name) VALUES($1)`, [name],(err,data)=>{
    if (err){
      console.log(err + "user cannot be created");
      cb(err);
    }
    cb(null, data);

  });
  


} 


module.exports = {publicHandler, getData, postData};

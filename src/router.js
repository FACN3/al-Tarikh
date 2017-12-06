const handler = require("./handler");

const router = (req, res) => {
  var url = req.url;
  if(url === '/' || url.includes('/public')){
      handler.publicHandler(req,res);
      handler.getData((err,users)=>{
        if(err){
          console.log('router error: ' + err);
          res.writeHead(500, {"Content-Type": "text/html"});
          res.end('Erroooooooooor');
        }
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(users));
        console.log(JSON.stringify(users));

      });
    }else{
      res.end("errorrrrr");
    }
  }

module.exports = router;

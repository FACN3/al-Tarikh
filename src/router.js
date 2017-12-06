const handler = require("./handler");

const router = (req, res) => {
  var url = req.url;
  // console.log(url);
  if(url === '/' || url.includes('/public')){
      handler.publicHandler(req,res);
    }else if (url === '/users') {
      handler.getData((err,users)=>{
        if(err){
          console.log('router error: ' + err);
          res.writeHead(500, {"Content-Type": "text/html"});
          res.end('Erroooooooooor');
        }else{
        res.writeHead(200, {"Location":"/" , 'Content-Type':'application/json'});
        console.log('the users res frob backend ',JSON.stringify(users));

        res.end(JSON.stringify(users));
        }
      });
    }else{
      res.end("errorrrrr");

    }
  }

module.exports = router;

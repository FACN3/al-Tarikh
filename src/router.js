const handler = require("./handler");

const router = (req, res) => {
  var url = req.url;
  if(url === '/' || url.includes('/public')){
      handler.publicHandler(req,res);
    }else{
      res.end("errorrrrr");
    }
  }

module.exports = router;

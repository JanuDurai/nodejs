const { URLSearchParams } = require("node:url");

const handleReq = { '/': home,'/message': message}
function home(res){
  console.log(`Home handler`);
  fs.readFile(__dirname + "/index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(data);
  });
}

function message(res,payload){
  console.log(`Message handler`);
  let query = new URLSearchParams(payload);
  let data = {
     name: query.get('name'),
     message:query.get('message')
  }
  res.writeHead(200,{'Content-type':'application-json'});
  res.write(JSON.stringify(data));
  res.end();
}

module.exports = {
  handleReq,home,message

}





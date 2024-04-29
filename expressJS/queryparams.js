const express = require("express");
let app = express();

//static files
app.use(express.static('public'))

// app.listen(8000,()=> console.log(`Server ready`))


//accessing query params

app.get('/uppercase/:value',(req,res)=> res.send(req.params.value.toUpperCase()))

// app.use("/things", (req, res, next) => {
//   console.log(`new request received at ${Date.now()}`);
//   next();
// });

// app.get("/things", (req, res) => {
//   res.send(`get request received at ${Date.now()}`);
// });

// app.post("/things", (req, res, next) => {
//   res.send(`post request`);
// });


const fs = require("node:fs");
const readFile = JSON.parse(fs.readFileSync("./personDetails.json"));

app.use('/',(req,res,next)=>{
  console.log(`Method -  ${req.method} -- ${new Date()}`);
  res.send(`Method -  ${req.method} -- ${new Date()}`)
  next();
})

app.get("/get", (req, res) => {
  // res.send(readFile);
  res.json({
    "status":true
   })
});

app.post("/post",(req,res)=>{
   res.json({
    "status":true
   })
})

app.listen(7000);
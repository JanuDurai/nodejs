const express = require("express");
let app = express();

// app.get("/", (req, res) => {
//   res.send("Express JS");
// });



let server = app.listen(8000, () => {
  console.log(`Express App is running`);
});

app.get('/uppercase/:value',(req,res)=> res.send(req.params.value.toUpperCase()))

app.use(express.static('public'))

app.listen(4000,()=> console.log(`Server ready`))
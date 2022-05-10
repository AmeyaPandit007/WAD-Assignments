const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();


const stapath = path.join(__dirname+"/public");
console.log(stapath);
app.use(express.static(stapath));

app.get('/',(req,res) => {
    //res.send("<h1>Hello Everyone..!</h1>");

    res.send("AAP");
});

app.listen(3200,()=>{
    console.log("Server is up and running on port 3200.");
});
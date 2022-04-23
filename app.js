const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs");

const port = process.env.port || 8000;

app.use("/public", express.static(path.join(__dirname, "/public")))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}));  

app.get("/", (req,res)=>{
    res.render("index.ejs")
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port} `)
})
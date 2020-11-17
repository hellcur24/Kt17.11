const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/generateDate.js");

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let toDoList = [];

app.get("/",(req,res)=> {
    let day = date.getDate();
    let weekday = date.getWeekDay();
    console.log(day);
    res.render("index.ejs", {date: day, toDoItems: toDoList});
});
app.get("/about",(req,res)=> {
    res.render("about.ejs");
});



app.post("/", (req,res)=> {
    let newTask = req.body.Fname;
    let newTask2 = req.body.Pnumber;
    toDoList.push(newTask + ' ' + newTask2);
    
    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
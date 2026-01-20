// const express = require("express");
// // import Child1 from "./components/child1";

// const app = express();



// // app.use("/child",Child1)

// app.set('view engine','ejs');
// const data = ["raj","mohan","pankaj","sema","sumit"];

// app.get("/",(req,res)=>{
//      res.render('index',{name:"cybrom",data : data});
// });

// // app.get('/about',(req,res)=>{
// //     res.send('ths is about page ')
// // });

// // app.get('/contact',(req,res)=>{
// //     res.send('This is contact page')
// // })


// app.listen(3000,()=>{
//     console.log("server is running on port ")
// })


// fro my EJS file

const express = require("express");
const app = express();

app.set("view engine", "ejs");

const data = ["raj", "mohan", "pankaj", "seema", "sonam"];

app.get("/", (req, res) => {
  res.render("index", { name: "Cybrom", data });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

const express = require("express");

const app = express();

app.get("/",(req,res)=>{
     res.send("hey how are you");
});



app.listen(3000,()=>{
    console.log("server is running on port ")
})
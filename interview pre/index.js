const express = require("express");
import Child1 from "./components/child1";

const app = express();

app.use("/child",Child1)
app.get("/",(req,res)=>{
     res.send("hey how are you");
});



app.listen(3000,()=>{
    console.log("server is running on port ")
})
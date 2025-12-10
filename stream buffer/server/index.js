 const express = require("express");
 const app = express();
 const fs = require("fs");
 const bodyparser = require("body-parser");
 const status = require("express-status-monitor");
 const zlib = require("zlib");

 app.use(bodyparser.urlencoded());

 // parse applaction /json
 app.use(bodyparser.json());
 app.use(status());
 app.get ("/stream",(req,res)=>{
    const stream = fs.createReadStream("sample.txt","utf-8");
    stream.on("data",(chunk)=>{
        res.write(chunk);
    })
    stream.on("end",()=>{
        res.end();
    })
 });


 app.get("/data",(req,res)=>{
    fs.readFile("sample.txt",(err,data)=>{
        if(err) throw err;
        res.end(data);
    })
 });

 app.get("/createzip",(req,res)=>{
    fs.createReadStream("./sample.txt").pipe(
        zlib.createGzip().pipe(fs.createWriteStream("./simple.zip"))
    )
    res.end("your zip file is createad!")
 })

 const port=8000;
 app.listen(port,()=>{
    console.log(`server is run on port  ${port}`)
 })
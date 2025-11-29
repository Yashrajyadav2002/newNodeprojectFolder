// readable stream !!!!!!!!!!!!!!
const fs = require("fs");
//createa readable stream for a file;

const readableStream = fs.createReadStream('input.txt',{

encoading: "utf8",
highWaterMark: 64 * 1024 // kb;
});

//Event for readableStream

readableStream.on('data',(chunk)=>{
    console.log(`Received ${chunk.length}bytes of data.`);
    console.log(chunk);
});

readableStream.on('end',()=>{
    console.log('no more data to raed');
});

readableStream.on('error',(err)=>{
    console.error('erroe reading from stream ',err)
});



//  Writablestream @!!!!!!!!!11


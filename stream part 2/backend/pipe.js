const fs = require("fs");

// create read and write stream

const readableStream = fs.createReadStream('source.txt');
const writeableStream = fs.createWriteStream('destination.txt');

// pipe the readable to writable stream

readableStream.pipe(writeableStream);

// handle complation and errorors

readableStream.on('error',(err)=>{
    console.error("Read error",err);
});

writeableStream.on('finish',()=>{
    console.log('file copy complited');
})



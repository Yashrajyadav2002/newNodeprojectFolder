const fs = require('fs');

//create a readable stream
const readableStream = fs.createReadStream('input.txt','utf8');

// writable stream
const writeableStream = fs.createWriteStream('output.txt');


// pipeing in the data;  

readableStream.pipe(writeableStream);

//handle complaction and errors 

writeableStream.on('finish',()=>{
    console.log('File copy complited');
});

readableStream.on('error',(err)=>{
    console.error('error reading file',err);
});

writeableStream.on('error',()=>{
    console.error('error writing',err);
})


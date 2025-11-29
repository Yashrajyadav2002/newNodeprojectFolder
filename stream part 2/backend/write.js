const fs = require('fs');

const writeableStream = fs.createWriteStream('output.txt');

// write data to stream 
writeableStream.write('hello');
writeableStream.write('world');
writeableStream.write('\nwriting to a stream is easy');

// end the stream
writeableStream.end();
// event for writeble atream 
writeableStream.on('finish',()=>{
    console.log('all data has been write to the file');
});

writeableStream.on('error',(err)=>{
    console.error('erroe writhing to stream', err)
});




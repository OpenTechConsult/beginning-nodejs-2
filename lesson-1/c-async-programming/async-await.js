// Async await provide a better way of writing asynchronous code.
// It makes the code look and behave a little more like syncronous code
// Still exploring our file reading code example
// we want to get the contents of two files and concatenate them in order
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
async function readFiles() {
    const content1 = await readFile(`${__dirname}/temp/sample1.txt`);
    const content2 = await readFile(`${__dirname}/temp/sample2.txt`);
    return content1 + '\n - and - \n\n' + content2;
} 
readFiles().then(result => console.log(result));
// We have 10 files and we want to read them all
// We can use Promise.all. It's a handy function
// that enables us to run asynchronous function in parallel
// It's input is an array of promises, its output is 
// a single promise that is fulfilled with an array of the result
const { error } = require('console');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const files = [
    'temp/sample.txt',
    'temp/sample1.txt',
    'temp/sample2.txt'
];
// map the files to the readFile function and creating an array of promises
const promises = files.map(file => readFile(`${__dirname}/${file}`, 'utf8'));
Promise.all(promises)
    .then(data => {
        data.forEach(text => console.log(text));
    })
    .catch(error => console.log('err: ', error));
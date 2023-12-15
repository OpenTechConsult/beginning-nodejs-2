const fs = require('fs');
let file = `${__dirname}/temp/sample.txt`;
const callback = (err, data) => {
    if(err) throw err;
    console.log(data);
}
fs.readFile(file, 'utf8', callback);
console.log('Print out last!');
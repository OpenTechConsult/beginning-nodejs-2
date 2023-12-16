const fs = require('fs');
const util = require('util');
const _ = require('lodash');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function transformFile(file) {
    console.log('reading file: in-file.txt');
    const content = await readFile(file, 'utf8');
    const arrayOfNames = content.split('\n');
    const arrayOfFormatedAndSortedNames = arrayOfNames.map(item => {
       return _.startCase(item);
    }).sort()
    const formatedAndSortedNames = arrayOfFormatedAndSortedNames.join('\n');
    console.log('writing file: out-file.txt');
    writeFile('out-file.txt', formatedAndSortedNames);
    return formatedAndSortedNames;
}

transformFile(`${__dirname}/in-file.txt`)
    .then((result) => console.log('Done'));
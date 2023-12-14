const request = require('request');

request('http://www.nodejs.org', (error, response, body) => {
    if (error) {
        console.log('error', error);
    } else {
        console.log('body:', body);
    }
})
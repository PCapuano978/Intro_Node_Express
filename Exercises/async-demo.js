var fs = require('fs');
function phoneNumber(err, data) {
    console.log('data: ', data)
}

fs.readdir('../', phoneNumber);
console.log("This code is last");

fs.readFile('./data1.json', 'utf-8', function(err, data) {
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
});
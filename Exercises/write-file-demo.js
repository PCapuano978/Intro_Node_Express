import { fstat } from "fs";

var jsonString = {
    name: 'John'
};

fstat.writeFile('data2.json', jsonString, function(err) {
    if (err) {
        console.log(err);
    }
});
var fs = require('fs');
// https://nodejs.org/docs/latest-v8.x/api/fs.html#fs_fs_readdirsync_path_options
var data = fs.readdirSync('../')
console.log('data: ', data);
console.log("This code is last")
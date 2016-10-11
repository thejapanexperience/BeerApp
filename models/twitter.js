const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname,'../data/twiiterList.json');
const uuid = require('uuid');


exports.write = function(newData,cb){
  let json = JSON.stringify(newData);
  fs.writeFile(filename,json,cb);
}

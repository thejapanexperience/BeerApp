const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname,'../data/twitterList.json');
const uuid = require('uuid');


exports.write = function(newData,cb){
  let json = JSON.stringify(newData);
  fs.writeFile(filename,json,cb);
}

exports.saveTweet = (tweet) => new Promise ((res, rej) => {
  console.log('in savedTweet in twitter.js');
  fs.readFile(filename, (err, buffer) => {
    if (err) return rej(err)
    try {
      var data = JSON.parse(buffer)
    } catch (e) {
      var data = []
      return rej('failed')
    }
    console.log('data: ', data)
    console.log('tweet: ', tweet)
    data.push(tweet)
    const json = JSON.stringify(data)
    fs.writeFile(filename, json, (err) => {
      if (err) throw err
    })
    res(data)
  })
})

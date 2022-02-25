// Pair programmed with Harjas Anand
// Edge cases to be added still

const request = require('request');
const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout
});

// write a function that uses request library to fetch contents url, download resource to specific path

request(url, (error, response, body) => {
  if (error) {
    console.log('Error: URL does not exist');
    rl.close();
  } else {
    if (localPath === false) {
      console.log("Invalid localPath");
    }
    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.log('Cannot create file');
      } else {
        fs.stat(localPath, (err, stats) => {
          if (!err) {
          console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}.`);
          }
        })
        
        // rl.close();
      }
    });
  }
});


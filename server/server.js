const path = require('path');
const fs = require('fs');
const request = require('request');

let chirpPath = path.join(__dirname, '../chirps.json');

let chirps = [
    { name: "Ellie", msg: "Hey friends" },
    { name: "Devon", msg: "Sup? How is Bilbo?" },
    { name: "Bethany", msg: "Are you packing for NYC?" },
    { name: "Bilbo", msg: "MY PRECIOUS" },
    { name: "Ellie", msg: "No, change of plans. Great Uncle Bilbo is having a hard time right now, so we aren't going" },
];

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) => { 
    if(err) console.log(err);

    console.log('Cool!');
});

fs.readFile('chirps.json', (err, data) => { 
    if(err) console.log(err);

    let readChirps = JSON.parse(data);
    console.log(readChirps);
});






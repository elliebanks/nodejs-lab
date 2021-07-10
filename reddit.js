const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);
    
    let articleArray = [];

    JSON.parse(body).data.children.forEach(item => {
        articleArray.push({
            title: item.data.title,
            url: item.data.url,
            author: item.data.author
        });

        let articles = JSON.stringify(articleArray);
        fs.writeFileSync("popular-articles.json", articles);
    });
});
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then((data) => {

        let articleArray = [];

        data.data.children.forEach(item => {
            articleArray.push({
                title: item.data.title,

                url: item.data.url,

                author: item.data.author
            });

            let article = JSON.stringify(articleArray);
            fs.writeFileSync("popular-articles.json", article);
        });
    })
    .catch(function (err) {
        console.log(err);
    });


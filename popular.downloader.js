const path = require('path');
const fs = require('fs');
//const request = require('request');
const rp = require('request-promise');

const options = {
    json: true,
}

rp('https://reddit.com/r/popular.json', options)
    .then(function (payLoad) {
        payLoad.data.children.forEach(function (item) {
            if (path.extname(item.data.url) == ".jpg" || path.extname(item.data.url) == ".png" || path.extname(item.data.url) == ".gif") {
                const imageRequestOptions = {
                    url: item.data.url,
                    encoding: "base64"
                };

                rp(imageRequestOptions)
                    .then(function (image) {
                        fsWriteFile(`./downloads/${item.data.id}$/{path.extname(item.data.url)}`, image, "base64", function (err) {
                            if (err) throw err;
                            console.log("saved");
                        })
                    })

            }
        })

    })

    .catch(function (err) {
        console.log(err);
    });
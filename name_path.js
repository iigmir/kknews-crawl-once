const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

module.exports = function(body)
{
    let prepared_name = 0;
    let bd = new JSDOM( body );
    let title = bd.window.document.querySelector("h1.p-name").textContent;
    let path = `./output/crawl-${ title }-in-${ Math.floor(new Date() / 1000) }.json`;
    // console.log( String(url) );
    while (fs.existsSync(path))
    {   //file exists
        prepared_name += 1;
        path = `./output/crawl-${ title }-in-${ Math.floor(new Date() / 1000) }-${ prepared_name }.json`;
    }
    return path;
}
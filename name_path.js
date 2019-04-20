const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function(url)
{
    let prepared_name = 0;
    let title = new JSDOM( body ).window.document.querySelector("h1.p-name").textContent;
    let path = `./output/crawl-${ title }-in-${ Math.floor(new Date() / 1000) }.json`;
    // console.log( String(url) );
    while (fs.existsSync(path))
    {   //file exists
        prepared_name += 1;
        path = `./output/crawl-${ title }-in-${ Math.floor(new Date() / 1000) }-${ prepared_name }.json`;
    }
    return path;
}
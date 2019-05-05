const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

module.exports = function(url)
{
    let prepared_name = 0;
    let new_name_array = url.split("/");
    let path = `./output/crawl-${ new_name_array[ new_name_array.length - 1 ] }-in-${ Math.floor(new Date() / 1000) }.json`;
    while (fs.existsSync(path))
    {   //file exists
        prepared_name += 1;
        path = `./output/crawl-${ new_name_array[ new_name_array.length - 1 ] }-in-${ Math.floor(new Date() / 1000) }-${ prepared_name }.json`;
    }
    return path;
}
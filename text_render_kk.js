const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function({ url, body })
{
    let output_json = {};
    let dom = new JSDOM( body );
    let prargraphs = [ ...dom.window.document.querySelectorAll("div.entry p") ];
    let texts = [];
    // console.log( prargraphs );
    prargraphs.map( p => texts.push( p.textContent ) );
    output_json.url = url;
    output_json.title = dom.window.document.querySelector("h1.p-name").textContent;
    output_json.date = dom.window.document.querySelector("p.post-meta a.updated").textContent;
    output_json.author = dom.window.document.querySelector("p.post-meta em").textContent;
    output_json.posts = texts;

    return JSON.stringify(output_json);
}
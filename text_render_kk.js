const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function({ url, body })
{
    let output_json = {};
    let dom = new JSDOM( body );
    let prargraphs = [ ...dom.window.document.querySelectorAll("div.entry p") ];
    let texts = [];
    let render_target = {
        url,
        title: dom.window.document.querySelector("h1.p-name").textContent,
        date: dom.window.document.querySelector("p.post-meta a.updated").textContent,
        author: dom.window.document.querySelector("p.post-meta em").textContent,
        texts
    };
    prargraphs.map( p => texts.push( p.textContent ) );
    Object.keys( render_target ).map( prop => output_json[prop] = render_target[prop] );
    return JSON.stringify(output_json);
}
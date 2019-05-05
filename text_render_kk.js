const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function({ url, body })
{
    let texts = [];
    let output_json = {};
    let dom = new JSDOM( body );
    let link_src = [ ...dom.window.document.querySelectorAll(".loop-title a") ];
    let prargraphs = [ ...dom.window.document.querySelectorAll("div.entry p") ];
    let links = link_src.map( item => { return { href: item.href, text: item.textContent }; });
    let render_target = {
        url,
        texts,
        links,
        title: dom.window.document.querySelector("h1.p-name").textContent,
        author: dom.window.document.querySelector("p.post-meta em").textContent,
        date: dom.window.document.querySelector("p.post-meta a.updated").textContent,
    };
    
    
    prargraphs.map( p => texts.push( p.textContent ) );
    Object.keys( render_target ).map( prop => output_json[prop] = render_target[prop] );

    return JSON.stringify(output_json);
}
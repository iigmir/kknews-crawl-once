const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function({ url, body })
{
    let output_json = {};
    let dom = new JSDOM( body );
    let document = dom.window.document;
    let texts  = [ ...document.querySelectorAll("div.entry p") ].map( p => p.textContent );
    let links  = [ ...document.querySelectorAll(".loop-title a") ].map( item => { return { href: item.href, text: item.textContent }; });
    let images = [ ...document.querySelectorAll("img[data-src]") ].map( d => d.dataset.src );
    let render_target = {
        url,
        title:  document.querySelector("h1.p-name").textContent,
        author: document.querySelector("p.post-meta em").textContent,
        date:   document.querySelector("p.post-meta a.updated").textContent,
        texts,
        links,
        images
    };
    Object.keys( render_target ).map( prop => output_json[prop] = render_target[prop] );
    return JSON.stringify(output_json);
}
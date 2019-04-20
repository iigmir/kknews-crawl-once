const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function(body)
{
    let output_json = {};
    let dom = new JSDOM( body );
    let prargraphs = [ ...dom.window.document.querySelectorAll("p") ];
    let texts = [];
    // console.log( prargraphs );
    prargraphs.map( p => texts.push( p.textContent ) );
    output_json.text_test = texts;

    return JSON.stringify(output_json);
}
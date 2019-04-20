const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const example_dom = new JSDOM( `<!DOCTYPE html><div><p>Hello world</p><p>Wills</p></div>` );
const prargraphs = [ ...example_dom.window.document.querySelectorAll("p") ];

prargraphs.map( p =>
    console.log( p.textContent )
);

// console.log( prargraphs );
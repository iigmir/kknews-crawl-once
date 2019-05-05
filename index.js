// Local module
const text_render = require("./text_render_kk");
const name_path = require("./name_path");
// Outgoing module
const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
// Vars
const { JSDOM } = jsdom;
let input_urls = process.argv.slice(2);

if( input_urls.length < 1 ) { throw Error("Error: No arguments inputed."); }

input_urls.map( url => request( url, (error, response, body) => request_parse(error, response, body, url) ) );

function request_parse(error, response, body, url)
{
    function handle_files(err)
    {
        if(err) { return console.log(err); }
        console.log("The file was saved!");
        return;
    }
    
    if( response && response.statusCode === 200 )
    {
        fs.writeFile( name_path(body), text_render(body), (err) => handle_files(err) );
    }
    else
    {
        console.log({ error });
        console.log("statusCode:", response && response.statusCode);
    }
}
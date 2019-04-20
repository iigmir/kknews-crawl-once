const request = require("request");

request( "http://www.example.com", (error, response, body) =>
{
    if( response && response.statusCode === 200 )
    {
        console.log({ body });
        // console.log('body:', body);
    }
    else
    {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
    }
});
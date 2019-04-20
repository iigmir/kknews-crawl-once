const fs = require("fs");
function write_json()
{
    let output_json = {};
    let dest_name = "destinion";
    let dest_array = [];
    dest_array.push(1);
    dest_array.push("Foo");
    dest_array.push(null);
    output_json[ dest_name ] = dest_array;
    return JSON.stringify(output_json);
}

let path = `./output/test_json_in_${ Math.floor(new Date() / 1000) }.json`;
let prepared_name = 0;
while (fs.existsSync(path)) {
    //file exists
    prepared_name += 1;
    path = "./output/test_json-" + prepared_name + ".json";
}

fs.writeFile( path , write_json() , function(err) {
    if(err) { return console.log(err); }
    console.log("The file was saved!");
    return;
}); 
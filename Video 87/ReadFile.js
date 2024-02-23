const fs = require('fs');

fs.readFile("test.txt",(error,data)=>{
console.log(`${data.toString()} , ${error}`);
if (error === null) {
    console.log(`there is no error`);
}
})
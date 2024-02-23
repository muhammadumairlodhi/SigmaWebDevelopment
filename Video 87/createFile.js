// The AppendFile() append specified text to the end of an existing file.If file does not exist, it will be created.    
const { log } = require('console');
const fs = require('fs');

fs.appendFile('test.txt','This is the content pass with the help of append file method', (error , data) => {

})

// ++++++++++++++++++ Write File ++++++++++++++++++

fs.writeFile('test2.txt', 'This is the content pass with the help of write file method', (error , data) => {
    console.log(error, data);
})
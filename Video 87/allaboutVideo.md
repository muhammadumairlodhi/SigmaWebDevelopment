**Node.js File System and Path**

**Node.js File System**
**There are commen method of `fs`**

- `ReadFile`
- `CreateFile`
- `UpdateFile`
- `DeleteFile`
- `RenameFile`

> Method of ReadFile 👇

```js
fs.readFile(/*fileName*/, */options*/, */Callback*/)`
```

<!-- Check file for function is ReadFile.js  -->

> Method of CreateFile 👇

```js
1 - fs.appendFile();
var fs = require("fs");

fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
2 - fs.writeFile();

var fs = require("fs");
fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

3 - fs.open();

var fs = require("fs");

fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
```

 <!-- Check file for function is WriteFile.js  -->

>Method for updateFile 👇

```js
// As same as create file and appendFile
```


> Method for deleteFile 👇

```js   
var fs = require('fs');

fs.unlink("text.txt", (err) => {
    if (err) throw err
    console.log('File deleted successfully')
 })
 ```

>Method for renameFile 👇
```js
const fs = require('fs');

fs.rename('old.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});
```



*Project*
1.Takes a directory path from the user.
2.Reads all files within that directory.
3.Creates subfolders based on file extensions (e.g., "images", "documents", etc.).
4.Moves files into their corresponding subfolders.

```js
const fs = require('fs');
const path = require('path');

// Get the directory path from the user (you'll need to implement this part)
const directoryPath = process.argv[2]; // Assuming path is passed as a command-line argument

// Error handling if a directory path is not provided
if (!directoryPath) {
  console.error('Please provide a directory path.');
  process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    const fileExt = path.extname(filePath).substring(1); // Remove the leading '.'

    // Create a folder for the file extension if it doesn't exist
    const targetDir = path.join(directoryPath, fileExt);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }

    // Move the file
    const newFilePath = path.join(targetDir, file);
    fs.rename(filePath, newFilePath, (err) => {
      if (err) throw err;
      console.log(`Moved '${file}' to '${targetDir}'`);
    });
  });
});
```
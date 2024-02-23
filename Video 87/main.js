const fs = require('fs');

// console.log(fs);

// This will write blocking code. This apporuch is not good.
// fs.writeFileSync("text.txt","This is the file for testing")

// This will write non-blocking code. This approach is good.


// console.log("Starting");

fs.writeFile("text2.txt", "This is an other File for Testing ", () => {
    // console.log("File Created successfully");
}
)
// console.log("Ending");

// +++++++++++++++++++++++++++++ Now Read the Files +++++++++++++++++++++++++++++++++++

fs.writeFile("test.txt", "This is the file for Read file test", () => {
    console.log("File created successfullly")
    fs.readFile("test.txt", (error, data) => {
        console.log(`${data.toString()} , ${error}`);
    })
})

// +++++++++++++++++++++++++++++ CallBackHEll ++++++++++++++++++++++++++

fs.writeFile("test.txt", "This is the file for Read file test", () => {
    console.log("File created successfullly")
    fs.readFile("test.txt", (error, data) => {
        console.log(`${data.toString()} , ${error}`);
        // again
        fs.writeFile("test.txt", "This is the file for Read file test", () => {
            console.log("File created successfullly")
            fs.readFile("test.txt", (error, data) => {
                console.log(`${data.toString()} , ${error}`);
                // again
                fs.writeFile("test.txt", "This is the file for Read file test", () => {
                    console.log("File created successfullly")
                    fs.readFile("test.txt", (error, data) => {
                        console.log(`${data.toString()} , ${error}`);
                        // again
                        fs.writeFile("test.txt", "This is the file for Read file test", () => {
                            console.log("File created successfullly")
                            fs.readFile("test.txt", (error, data) => {
                                console.log(`${data.toString()} , ${error}`);
                                // again
                                fs.writeFile("test.txt", "This is the file for Read file test", () => {
                                    console.log("File created successfullly")
                                    fs.readFile("test.txt", (error, data) => {
                                        console.log(`${data.toString()} , ${error}`);
                                        // again
                                        fs.writeFile("test.txt", "This is the file for Read file test", () => {
                                            console.log("File created successfullly")
                                            fs.readFile("test.txt", (error, data) => {
                                                console.log(`${data.toString()} , ${error}`);
                                                // again
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
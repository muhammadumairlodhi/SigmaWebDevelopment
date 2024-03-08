const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));


app.get('/', (req, res) => {
    console.log("Hey this is get Request");
  res.send('Hello World 6!')
})
// app.post('/', (req, res) => {
//     console.log("Hey this is Post request");
//     res.send('Hello World!')
// })
app.put('/', (req, res) => {
    console.log("Hey this is Put request");
    res.send('Hello World this is put request!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
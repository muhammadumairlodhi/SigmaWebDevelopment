
const express = require('express')
const app = express()
const port = 3000
//This code will show the file which is place in public folder
app.use(express.static('public'))

// app.get app.post app.put app.delete (path,handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('This is an about page')
})
app.get('/blog', (req, res) => {
  res.send('This is a blog page')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
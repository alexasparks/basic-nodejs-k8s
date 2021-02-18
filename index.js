const express = require('express')
const process = require('process')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

app.use('/hello', (req, res) => {
  res.send(`Hello ${process.env.HELLO_GREETING}`)
})

app.use('/bye', (req, res) => {
  res.send(`Bye ${process.env.BYE_GREETING}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
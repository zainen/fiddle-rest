const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8888
const app = express()

//MIDDLEWARE
const test = require('./routes/test')

//ROUTES
app.use('/api', test)

app.get('/', (req, res) => {
  res.send('we are on home')
})




app.listen(8000, () => {
  console.log(`listening on port ${PORT}`)
})
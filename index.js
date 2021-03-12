const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8888
const app = express()
const db = require('./db')
const path = require('path')

//HELPERS
const read = require('./helpers/read')

Promise.all([
  read(path.resolve(__dirname, 'db/schema/create.sql')),
  read(path.resolve(__dirname, 'db/schema/development.sql'))
])
  .then(([create, seed]) => {
    app.get('/api/debug/reset', (request, response) => {
      db.query(create)
      .then(() => db.query(seed))
      .then(() => {
        console.log('db reset')
        response.status(200).send('DB Reset')
      })
    })
  })
  .catch(e => {
    console.log(`Error: ${e}`)
  })

//MIDDLEWARE
const test = require('./routes/test')
const numbers = require('./routes/numbers')

//ROUTES
app.use('/api', test)
app.use('/api', numbers(db))


//HOME
app.get('/', (req, res) => {
  res.send('we are on home')
})





app.listen(8000, () => {
  console.log(`listening on port ${PORT}`)
})
const router = require('express').Router()

module.exports = db => {
  router.get('/numbers', (req, res) => {
    db.query(`SELECT * FROM numbers`).then(response => {
      res.json(response.rows)
    })
  })
  return router
}
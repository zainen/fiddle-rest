const router = require('express').Router()

router
  .route('/test')
  .get((req, res) => {
    res.send('this is test')
    console.log('hi test')
  })

module.exports = router
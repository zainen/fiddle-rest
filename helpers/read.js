const path = require('path')
const fs = require('fs')

module.exports = file => {
  return new Promise((res, rej) => {
    fs.readFile(
      file,
      {
        encoding: 'utf-8'
      },
      (error, data) => {
        if (error) return rej(error)
        res(data)
      }
    )
  })
}
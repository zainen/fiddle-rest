const pg = require('pg')

const client = new pg.Client({
  connectionString: process.env.PG_URL
})

client
  .connect()
  .catch(e => console.log(`Error connecting to postgres ${e}`))


module.exports = client
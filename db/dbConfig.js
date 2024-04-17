const sql = require('mysql2')

const pool = new sql.createPool({
    database: 'databaseapp',
    host: 'localhost',
    user: 'root',
    password: 'No way jose',
    connectionLimit: 10,
})

module.exports = pool
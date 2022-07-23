const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'databaseForWelbex',
  password: '0000',
  port: 5432,
});

const getRecords = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM welbex', (error, results) => {
            if (error) {
            reject(error)
            }
            resolve(results.rows);
        })
    }) 
}

module.exports = {
    getRecords
}
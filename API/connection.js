var pg = require('pg');

const connectionString = "postgres://mtxjlzzvzncupn:afdbb8552ea59f968a094cec2d9cc0f4caee3fa1f8673b99889d1b8863f06d67@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/dbrn3npvv7kq12"
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
})

module.exports = pool;
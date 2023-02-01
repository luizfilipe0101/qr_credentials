const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const conn = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB,
}
);

module.exports = conn;
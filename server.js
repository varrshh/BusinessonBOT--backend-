const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"root123",
 connectionString: "postgres://postgres:root123@localhost:5432/postgres",
 //ssl: true
});

module.exports = client
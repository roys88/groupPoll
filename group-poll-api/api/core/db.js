const mysql  = require('mysql');
const db  = require('../config/db');
const db = {
    host:'localhost',
    port:'3306',
    scehma:'tempDB',
    user:'root',
    password:'Aa221221'
};

var connection = mysql.createConnection({
    host: db.host,
    user:db.user,
    password:db.password,
    database:db.scehma
});
connection.connect();

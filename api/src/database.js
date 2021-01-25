const mysql = require('mysql');

const mysqlConecction = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
});

mysqlConecction.connect(function(err) {
    if (err) {
        console.log(err);
        return
    } else {
        console.log('conecction true database');
    }
})

module.exports = mysqlConecction;
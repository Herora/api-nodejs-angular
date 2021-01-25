const { response } = require('express');
const express = require('express');
const router = express.Router();

var mysqlConnection = require('../database');


router.post('/auth', function(request, response) {
    var clave = request.body.clave;
    var usuario = request.body.usuario;
    if (usuario && clave) {
        mysqlConnection.query("SELECT * FROM user WHERE usuario = ? AND clave = ? ", [usuario, clave], (error, results, fields) => {
            if (results.length > 0) {
                var data = results[0];
                response.send(data)
            } else {
                response.send('usuario o clave incorrecta')
            }
            response.end();
        });
    } else {
        response.send('verifica he intente nuevamante')
        response.end();
    }
})


router.post('/register', function(request, response) {
    var data = request.body.form;
    if (data) {
        var post = {
            nombre: data.nombre,
            cedula: data.cedula,
            telefono: data.telefono,
            fecha_nac: data.fecha_nac,
            genero: data.genero,
            cliente: data.cliente,
            sede: data.sede,
            edad: data.edad,
        }
        mysqlConnection.query('INSERT INTO adviser SET  ?', post, (error, results, fields) => {
            if (results) {
                response.send("registro exitoso")
            } else {
                response.send('error en el registro')
            }
            response.end();
        });
    } else {
        response.send('verifica he intente nuevamante')
        response.end();
    }
})


router.get('/list', function(request, response) {
    mysqlConnection.query('SELECT * FROM adviser', (error, results, fields) => {
        if (results) {
            const data = results;
            response.send(data)
        } else {
            response.send('Intenta Nuevamente')
        }
        response.end();
    });
});

module.exports = router;
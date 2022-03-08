//constante para el paquete de mysql
const mysql = require('mysql');
//constante para el paquete express
const express = require ('express');
//variable para los metodos de express
var app = express();
//constante para el paquete body-parser
const bp = require('body-parser');
const { CLIENT_MULTI_STATEMENTS } = require('mysql/lib/protocol/constants/client');

//enviando los datos Json a NodeJS API
app.use(bp.json());

//conectar a la base de datos de (MySQL)
var mysqlconnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ssh',
    multipleStatements: true
})

//test de conexion a base de datos

mysqlconnection.connect((err)=>{
if (!err) {
    console.log('Conexion Exitosa')
}else {
        console.log('error al conectar a la DB')
    }
}
);

//ejecutar el server en un puerto especifico

app.listen(3000,()=> console.log('server running puerto 3000'));





const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotelDB'
});

connection.connect(function(err){
    if (err) {
        console.log('not connected');
    } else {
        console.log('connected successfully');
    }
});

module.exports = connection;
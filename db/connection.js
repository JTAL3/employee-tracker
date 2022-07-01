// const mysql = require('mysql2');

// //connect to the correct database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'employee'
//     }
// );

// module.exports = db;

const mysql = require("mysql2");


const db = mysql.createConnection(
    {
        host: "localhost",
        user: 'root',
        password: '',
        database: "work",
    },
    //console.log("Connected to database")
);

module.exports = db;
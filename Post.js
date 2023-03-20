import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: '3306',
    user: "root",
    database: "test",
    password: ""
}).promise();


const sql = `INSERT INTO users (author, title, content, picture) VALUES (?, ?, ?, ?)`;

export { connection, sql }


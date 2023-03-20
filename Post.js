import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: "",
    port: '',
    user: "",
    database: "",
    password: ""
}).promise();


const sql = `INSERT INTO users (author, title, content, picture) VALUES (?, ?, ?, ?)`;

export { connection, sql }


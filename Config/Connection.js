const connection=require('mysql2/promise');
require('dotenv').config();

const db=connection.createPool({
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    connectionLimit:process.env.DB_CONNECTION_LIMIT || 10,
    waitForConnections:true
})



module.exports=db;
import mysqlConnection from 'mysql2/promise';

// Create a connection pool
const mysql = mysqlConnection.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbms',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export { mysql };

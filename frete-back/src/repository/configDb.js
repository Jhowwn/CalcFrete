import mysql from 'mysql2/promise';

async function connect(){
    const datainfo = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'frete'
    }

    const connection = await mysql.createConnection(datainfo);

    return connection;
}

export default {connect};
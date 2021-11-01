import database from '../repository/configDb.js';

async function insertCity({nameCity, typeCity, idUF}){
    console.log(nameCity)
    const conn = await database.connect();
    const sql = `INSERT INTO CIDADE(NOME_CIDADE,TIPO_CIDADE,FK_ID_UF)VALUES(?,?,?)`;
    const newCity = [nameCity, typeCity, idUF]
    conn.query(sql, newCity);
    conn.end();
}

async function findAllcity(){
    const conn = await database.connect();
    const sql = `select * from cidade c join uf u on c.FK_ID_UF = u.ID_UF`
    const [rows] = await conn.query(sql)
    conn.end();

    return rows;
}

async function findNameCity(nameCity){
    const conn =  await database.connect();
    const sql = `select * from cidade where nome_cidade = '${nameCity}'`
    const [rows] = await conn.query(sql);
    conn.end();
    
    return rows
}

async function updateCity({nameCity, typeCity, idUF, idCity}){
    const conn = await database.connect();
    const sql = `update CIDADE set NOME_CIDADE = ?, TIPO_CIDADE = ?, FK_ID_UF= ? where id = ?`;
    const updateCity = [nameCity, typeCity, idUF, idCity]
    conn.query(sql, updateCity);
    conn.end();
}

export default {insertCity, findAllcity, findNameCity, updateCity}
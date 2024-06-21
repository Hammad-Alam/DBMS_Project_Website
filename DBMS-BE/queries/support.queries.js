import { mysql } from "../database/database.js";

export const createSupport = async ({firstName,lastName,email,message}) => {
    const query = `INSERT INTO support (firstName,LastName,email,message) values (?,?,?,?)`;
    const [results,fields] = await mysql.query(query,[firstName,lastName,email,message]);
    console.log(message);
    return results;
};

export const getSupport = async () => {
    const query = `SELECT * FROM support`;
    const [results,fields] = await mysql.query(query);
    return results;
}   



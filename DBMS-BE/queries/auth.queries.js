import {mysql} from '../database/database.js'

export const findUser = async (email) => {
    const query = `SELECT * FROM user WHERE email = ? limit 1`
    const [results,fields] = await mysql.query(query, [email])
    return results;
}

export const createUser = async (email, password,name) => {
    const query = `INSERT INTO user (email, password, role, name) VALUES (?, ?, ?,?)`
    const [results,fields] = await mysql.query(query, [email, password,"sub-admin",name])
    return results;
}

export const fetchSubAdmins = async () => {
    const query = `SELECT * FROM user WHERE role = "sub-admin"`
    const [results,fields] = await mysql.query(query)
    return results;
}

export const deleteUser = async (id) => {
    const query = `DELETE FROM user WHERE id = ?`
    const [results,fields] = await mysql.query(query, [id])
    return results;
}

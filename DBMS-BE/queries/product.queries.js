import { mysql } from "../database/database.js";

export const createProduct = async (name, price, description, picture,stock,type,category,isFeature) => {
    const query = `INSERT INTO product (name, price, description, picture, stock,type,category,isFeature) VALUES (?, ?, ?, ?, ?, ?, ?,?)`
    const [results, fields] = await mysql.query(query, [name, price, description, picture, stock,type,category,isFeature])
    return results;
}

export const getProducts = async () => {
    const query = `SELECT * FROM product`
    const [results, fields] = await mysql.query(query)
    return results;
}

export const getProductById = async (id) => {
    const query = `SELECT * FROM product WHERE id = ?`
    const [results, fields] = await mysql.query(query, [id])
    return results;
}

export const deleteProduct = async (id) => {
    const query = `DELETE FROM product WHERE id = ?`
    const [results, fields] = await mysql.query(query, [id])
    return results;
}

export const updateProduct = async (id, name, price, description, picture, stock, type, category, isFeature) => {
    const query = `UPDATE product SET name = ?, price = ?, description = ?, picture = ?, stock = ?, type = ?, category = ?, isFeature = ? WHERE id = ?`;
    const [results, fields] = await mysql.query(query, [name, price, description, picture, stock, type, category, isFeature, id]);
    return results;
}

export const popularProducts = async () => {
    const query = `SELECT * FROM product WHERE isFeature = 1`
    const [results, fields] = await mysql.query(query)
    console.log(results);
    return results;
}

export const getProductsByCategory = async (category) => {
    const query = `SELECT * FROM product WHERE type = ?`
    const [results, fields] = await mysql.query(query, [category])
    return results;
}
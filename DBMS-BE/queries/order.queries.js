import { mysql } from "../database/database.js";

export const createOrder = async (order) => {
    const { name, address, city, phoneNumber, total } = order;
    const query = `INSERT INTO orders (name, address, city, phoneNo, total) VALUES (?, ?, ?, ?, ?)`;
    const values = [name, address, city, phoneNumber, total];
    const [result] = await mysql.query(query, values);
    return result;
};

export const createOrderItems = async ({orderId,productId,count,price}) => {
    const query = `INSERT INTO order_items (orderId, productId, quantity,price) VALUES (?,?,?,?)`;
    const [result] = await mysql.query(query, [orderId,productId,count,price]);
    return result;
}

export const orders = async () => {
    const query = `SELECT * FROM orders`;
    const [result] = await mysql.query(query);
    return result;
}

export const PendingOrderCount = async () => {
    const query = `SELECT COUNT(*) as count FROM orders WHERE status = 'pending'`;
    const [result] = await mysql.query(query);
    return result[0].count;
}

export const changeStatus = async (orderId, status) => {
    const query = `UPDATE orders SET status = ? WHERE id = ?`;
    const [result] = await mysql.query(query, [status, orderId]);
    return result;
}

export const totalSales = async () => {
    const query = `SELECT SUM(total) as total FROM orders WHERE status = 'delivered'`;
    const [result] = await mysql.query(query);
    return result[0].total;
}

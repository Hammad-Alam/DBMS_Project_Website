import { PendingOrderCount, changeStatus, createOrder, createOrderItems, orders, totalSales } from "../queries/order.queries.js";
import { asyncHandler,generateResponse } from "../utils/helper.js";

export const createChecoout = asyncHandler(async (req, res, next) => {
    const { fullName, address, city, phoneNumber, totalAmount, cart } = req.body;
    console.log(address);
    const order = await createOrder({name:fullName, address, city, phoneNumber:parseInt(phoneNumber), total:totalAmount});
    
    for (let i = 0; i < cart.length; i++) {
        cart[i].orderId = order.insertId;
    }

    const orderItemsPromises = cart.map(async (item) => {
        const { id, count, price } = item;
        await createOrderItems({
            orderId: order.insertId,
            productId:id,
            count: parseInt(count),
            price: parseFloat(price),
        });
    });
    generateResponse(orderItemsPromises, "Order Created", res)
});

export const order = asyncHandler(async (req, res, next) => {
    const order = await orders();
    generateResponse(order, "Orders", res)
});

export const pendingCount = asyncHandler(async (req, res, next) => {
    const count = await PendingOrderCount();
    generateResponse(count, "Pending Order Count", res)
});

export const statusChange = asyncHandler(async (req, res, next) => {
    const { orderId, status } = req.body;
    const result = await changeStatus(orderId, status);
    generateResponse(result, "Status Changed", res)
});

export const totalIncome = asyncHandler(async (req, res, next) => {
    const total = await totalSales();
    generateResponse(total, "Total Sales", res)
});

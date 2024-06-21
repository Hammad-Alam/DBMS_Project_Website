import axios from "axios";

export const createOrder = async (order: any) => {
    try {
        const response = await axios.post("http://localhost:8000/api/order/checkout", order);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const order = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/order/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const  pendingOrder = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/order/pending/count");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const totalSales = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/order/total");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const changeOrderStatus = async (id: number, status: string) => {
    try {
        const response = await axios.put(`http://localhost:8000/api/order/status`, { status,orderId:id });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

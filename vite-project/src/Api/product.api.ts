import axios from "axios";
import { LogIn } from "lucide-react";

export const getProducts = async () => {
    try {
        const {data} = await axios.get("http://localhost:8000/api/product");
        return { success: true, data: data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
            return { success: false, message: error.response.data.message }
    }
};

export const addProducts = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:8000/api/product", data);
      
        
        return { success: true, data: response.data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
            return { success: false, message: error.response.data.message }
    }
};

export const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/product/${id}`);
        return { success: true, data: response.data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}

export const updateProduct = async (id: number, payload: any) => {
    try {
        const {data} = await axios.put(`http://localhost:8000/api/product/${id}`, payload);
        return { success: true, data: data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}

export const getProductById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/product/${id}`);
        return { success: true, data: response.data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}

export const popularProducts = async () => {
    try {
        const data = await axios.get(`http://localhost:8000/api/product/fetch/popular`);
        return { success: true, data: data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}

export const fetchProductsByCategory = async (category: string) => {
    try {
        console.log(category);
        const data = await axios.get(`http://localhost:8000/api/product/category/${category}`);
        console.log(data);
        
        return { success: true, data: data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}
import axios from "axios";

export const login = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:8000/api/auth/login", data);
        return { success: true, data: response.data.data }

    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
            return { success: false, message: error.response.data.message }
    }
}

export const register = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:8000/api/auth/register", data);
        return { success: true, data: response.data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}

export const getSubAdmins = async () => {
    try {
        const {data} = await axios.get("http://localhost:8000/api/auth/admin");
        
        return { success: true, data: data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}

export const deleteAdmin = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/auth/admin/${id}`);
        return { success: true, data: response.data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        return { success: false, message: error.response.data.message }
    }
}   
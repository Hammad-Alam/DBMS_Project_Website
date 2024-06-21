import axios from "axios";

export const getSupport = async () => {
    try {
        const {data} = await axios.get("http://localhost:8000/api/support");
        return { success: true, data: data.data }

    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);

        if (error.response) {
            return { success: false, message: error.response.data.message }
        }
    }
};

export const sendSupport = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:8000/api/support", data);
      
        
        return { success: true, data: response.data.data }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
            return { success: false, message: error.response.data.message }
    }
};
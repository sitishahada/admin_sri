import axios from 'axios';

const API_URL = "http://localhost:5000"; // Change this to your deployed backend URL later

export const getItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
};

export const createItem = async (name, description) => {
    try {
        const response = await axios.post(`${API_URL}/items`, { name, description });
        return response.data;
    } catch (error) {
        console.error("Error creating item:", error);
    }
};

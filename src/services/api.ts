import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
    const response = await axios.get(`${API_BASE}/posts`);
    return response.data;
};

export const getPostDetails = async (id: number) => {
    const response = await axios.get(`${API_BASE}/posts/${id}`);
    return response.data;
};

export const getComments = async (postId: number) => {
    const response = await axios.get(`${API_BASE}/posts/${postId}/comments`);
    return response.data;
};

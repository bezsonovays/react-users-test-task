import axios from 'axios';

export default class PostService {
    static async getAll() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
    }

     static async getByID(id) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.data;
    }
}
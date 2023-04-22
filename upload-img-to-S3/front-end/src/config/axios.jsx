import axios from 'axios';

// const baseURL = import.meta.env.VITE_API_URL;
const baseURL = 'http://127.0.0.1:4000';

const USER_ID = 123;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'x-user-id': USER_ID,
  },
});

export default axiosClient;
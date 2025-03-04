import axios from "axios";

const apiClient = axios.create({
<<<<<<< HEAD
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
=======
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
>>>>>>> d2df44882de6b798ed9f103e11a4312097afe264
});

export default apiClient;

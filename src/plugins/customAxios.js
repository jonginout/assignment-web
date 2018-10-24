import axios from "axios";

export default axios.create({
    baseURL: 'http://api.jongin.site',
    // baseURL: 'http://localhost:3000/api',
    timeout: 3000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
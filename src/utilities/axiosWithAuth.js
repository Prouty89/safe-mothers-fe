import axios from 'axios';

const api = process.env.REACT_APP_API_URL || "http://localhost:5000"

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: api,
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    });
};

export default axiosWithAuth;

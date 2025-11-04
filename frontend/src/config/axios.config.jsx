import axios from "axios";

const axiosInstanse = axios.create({
    baseURL:"https://numeric-finance-ai-web.onrender.com",
    withCredentials:true
})


export default axiosInstanse
import axios from "axios";

const API = axios.create({
  baseURL: "https://deadline-remainder.onrender.com/api",
});

export default API;
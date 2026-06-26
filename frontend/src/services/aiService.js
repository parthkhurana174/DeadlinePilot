import axios from "axios";

const API = axios.create({
  baseURL: "https://deadlinepilot-backend.onrender.com/api",
});

export default API;
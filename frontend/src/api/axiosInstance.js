const axios = require("axios");
export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  baseURL: "http://localhost:4000",
});

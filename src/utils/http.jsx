import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    Authorization: `${process.env.REACT_APP_KEY}`,
  },
});
export default http;

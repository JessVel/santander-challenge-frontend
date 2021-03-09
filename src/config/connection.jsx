import axios from "axios";

const connection = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default connection;

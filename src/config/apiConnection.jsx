import axios from "axios";

const apiConnection = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  crossDomain: true,
});

export default apiConnection;

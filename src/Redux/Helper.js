import axios from "axios";

let instance = axios.create({
  baseURL: "https://wtsacademy.dedicateddevelopers.us/api",
});

export default instance;

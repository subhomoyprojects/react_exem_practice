import axios from "axios";

const instance = axios.create({
  baseURL: `https://wtsacademy.dedicateddevelopers.us/api`,
});

export default instance;

import axios from "axios";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

let Instance = axios.create({
  baseURL: "https://restapinodejs.onrender.com/api",
});

export default Instance;

import axios from "axios";

let Instance = axios.create({
  baseURL: "https://restapinodejs.onrender.com/api",
});

export default Instance;

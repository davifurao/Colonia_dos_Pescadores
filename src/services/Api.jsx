import axios from "axios";

const Api = axios.create({
  baseURL: "https://localhost:8080/php/create.php",
});

export default Api;
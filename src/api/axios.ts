import axios from "axios";

export default axios.create({
    baseURL: "https://sistema-de-horario.herokuapp.com",
    headers: { "Content-Type": "application/json" }
});
import axios from "axios";

export const API = axios.create({
    baseURL: "https://servicepad-post-api.herokuapp.com/",
});
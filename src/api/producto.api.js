import axios from "axios";

const productoApi = axios.create({
  baseURL: "http://localhost:8000/producto/api/v1/producto/",
});

export const getAllProductos = () => productoApi.get("/");

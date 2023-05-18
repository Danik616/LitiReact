import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obtener el token almacenado en localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Incluir el token en el encabezado de la solicitud
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
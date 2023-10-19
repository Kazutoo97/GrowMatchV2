import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://maroon-basket-clam-sock.cyclic.app",
});

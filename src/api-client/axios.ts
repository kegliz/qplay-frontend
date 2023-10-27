import axios from "axios";

const api = axios.create({
  //baseURL: "https://keglingpet-api.onrender.com",
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api

export const EndPoints = {
  programs: 'api/qprogs',
  renderProgram: 'api/qprogs/:id/img',
};

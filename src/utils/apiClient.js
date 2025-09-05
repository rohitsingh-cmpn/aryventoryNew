import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      // error: "AccessDenied", since access token is invalid or not found
      originalRequest._retry = true;
      try {
        await axios.post(`${API_URL}/token`, {}, { withCredentials: true });
        // Retrying to hit the same end point with updated access token
        return apiClient(error.config);
      } catch (err) {
        // When access token is not generated or refresh token is invalid
        if (err.response?.status === 401) {
          // Logic to logout the user
          localStorage.clear();
          window.location.href = "/";
        }
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

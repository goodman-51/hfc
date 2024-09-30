import api from "../lib/api";

export const getUsers = (query = null) => api.get("/users", { query });
export const getUserContent = (userId) => api.get(`/content/${userId}`);
export const setContentStatus = (postId, status) => api.post(`/content/${postId}/status`, { status });
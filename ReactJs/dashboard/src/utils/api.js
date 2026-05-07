import axios from "axios";

const BASE_URL = "https://dummyjson.com/users";

export const getUsers = (limit = 10, skip = 0) =>
  axios.get(`${BASE_URL}?limit=${limit}&skip=${skip}`);

export const searchUsers = (query) =>
  axios.get(`${BASE_URL}/search?q=${query}`);

export const getUserById = (id) => axios.get(`${BASE_URL}/${id}`);

export const addUser = (data) => axios.post(`${BASE_URL}/add`, data);

export const updateUser = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getProjectById = (id) => axios.get(`${API_URL}/projects/${id}`);
export const createProject = (project) => axios.post(`${API_URL}/projects`, project);
export const updateProject = (id, project) => axios.put(`${API_URL}/projects/${id}`, project);
export const deleteProject = (id) => axios.delete(`${API_URL}/projects/${id}`);

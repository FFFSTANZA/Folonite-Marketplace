import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export async function fetchComponents() {
  const response = await axios.get(`${API_BASE_URL}/components`);
  return response.data;
}

export async function fetchComponentById(id) {
  const response = await axios.get(`${API_BASE_URL}/components/${id}`);
  return response.data;
}

export async function publishComponent(componentData) {
  const response = await axios.post(`${API_BASE_URL}/components`, componentData);
  return response.data;
}

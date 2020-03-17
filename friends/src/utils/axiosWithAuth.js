import axios from 'axios';

export function getToken() {
  return localStorage.getItem('token');
}

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: token
    }
  });
};

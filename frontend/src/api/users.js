import { apiFetch } from './apiClient.js';

export const getUsers = async () => {
  return apiFetch('/users');
};

export const updateUser = async (userId, userData) => {
  return apiFetch(`/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  });
};
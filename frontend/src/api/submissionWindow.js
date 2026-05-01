import { apiFetch } from './apiClient.js';

export const getSubmissionWindow = async () => {
  return apiFetch('/submission-window');
};

export const updateSubmissionWindow = async (windowData) => {
  return apiFetch('/submission-window', {
    method: 'PUT',
    body: JSON.stringify(windowData),
  });
};
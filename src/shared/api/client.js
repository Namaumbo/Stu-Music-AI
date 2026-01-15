/**
 * HTTP Client for API requests
 */

import { API_BASE_URL } from './config.js';

/**
 * Make an HTTP request
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// GET request
export async function get(endpoint, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;
  return request(url, { method: 'GET' });
}

// POST request
export async function post(endpoint, data = {}) {
  return request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Upload file
export async function uploadFile(endpoint, file, additionalData = {}) {
  const formData = new FormData();
  formData.append('file', file);
  
  Object.keys(additionalData).forEach((key) => {
    formData.append(key, additionalData[key]);
  });

  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}

export default { get, post, uploadFile };


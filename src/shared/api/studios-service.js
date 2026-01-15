/**
 * Studios Service - API calls for recording studios
 */

import { get } from './client.js';
import { API_ENDPOINTS } from './config.js';

/**
 * Fetch all studios
 * @param {Object} params - { search, location, page, limit }
 * @returns {Promise}
 */
export async function fetchStudios(params = {}) {
  return await get(API_ENDPOINTS.STUDIOS, params);
}

/**
 * Fetch studio by ID
 * @param {string} studioId
 * @returns {Promise}
 */
export async function fetchStudioById(studioId) {
  return await get(API_ENDPOINTS.STUDIO_DETAILS(studioId));
}

export default {
  fetchStudios,
  fetchStudioById,
};


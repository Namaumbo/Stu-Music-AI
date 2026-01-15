/**
 * Tracks Service - API calls for tracks/songs
 */

import { get } from './client.js';
import { API_ENDPOINTS } from './config.js';

/**
 * Fetch all tracks
 * @param {Object} params - { genre, page, limit }
 * @returns {Promise}
 */
export async function fetchTracks(params = {}) {
  return await get(API_ENDPOINTS.TRACKS, params);
}

/**
 * Fetch recent tracks
 * @param {number} limit
 * @returns {Promise}
 */
export async function fetchRecentTracks(limit = 20) {
  return await get(API_ENDPOINTS.RECENT_TRACKS, { limit });
}

/**
 * Fetch popular tracks
 * @param {number} limit
 * @returns {Promise}
 */
export async function fetchPopularTracks(limit = 20) {
  return await get(API_ENDPOINTS.POPULAR_TRACKS, { limit });
}

export default {
  fetchTracks,
  fetchRecentTracks,
  fetchPopularTracks,
};

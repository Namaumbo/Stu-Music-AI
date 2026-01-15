/**
 * Analysis Service - API calls for song upload and analysis
 */

import { post, uploadFile, get } from './client.js';
import { API_ENDPOINTS } from './config.js';

/**
 * Upload a song file
 * @param {File} file - MP3 file
 * @param {Object} metadata - { title, artist, genre }
 * @returns {Promise}
 */
export async function uploadSong(file, metadata = {}) {
  return await uploadFile(API_ENDPOINTS.UPLOAD_SONG, file, metadata);
}

/**
 * Analyze a song
 * @param {string} fileId - Uploaded file ID
 * @param {Object} options - { analysisType, targetGenre }
 * @returns {Promise}
 */
export async function analyzeSong(fileId, options = {}) {
  return await post(API_ENDPOINTS.ANALYZE_SONG, { fileId, ...options });
}

/**
 * Fetch list of producers
 * @param {Object} params - { city, specialty }
 * @returns {Promise}
 */
export async function fetchProducers(params = {}) {
  return await get(API_ENDPOINTS.PRODUCERS, params);
}

/**
 * Request producer feedback
 * @param {Object} requestData - { fileId, producerId, genre, notes }
 * @returns {Promise}
 */
export async function requestProducerFeedback(requestData) {
  return await post(API_ENDPOINTS.REQUEST_FEEDBACK, requestData);
}

export default {
  uploadSong,
  analyzeSong,
  fetchProducers,
  requestProducerFeedback,
};


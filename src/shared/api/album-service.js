/**
 * Album Service - API calls for albums
 */

import { get } from './client.js';
import { API_ENDPOINTS } from './config.js';

/**
 * Fetch all albums
 * @param {Object} params - { search, sort, page, limit }
 * @returns {Promise}
 */
export async function fetchAlbums(params = {}) {
  return await get(API_ENDPOINTS.ALBUMS, params);
}

/**
 * Fetch album by ID
 * @param {string} albumId
 * @returns {Promise}
 */
export async function fetchAlbumById(albumId) {
  return await get(API_ENDPOINTS.ALBUM_DETAILS(albumId));
}

/**
 * Fetch tracks for an album
 * @param {string} albumId
 * @returns {Promise}
 */
export async function fetchAlbumTracks(albumId) {
  return await get(API_ENDPOINTS.ALBUM_TRACKS(albumId));
}

export default {
  fetchAlbums,
  fetchAlbumById,
  fetchAlbumTracks,
};

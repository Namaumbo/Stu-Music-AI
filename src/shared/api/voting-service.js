/**
 * Voting Service - API calls for voting system
 */

import { get, post } from './client.js';
import { API_ENDPOINTS } from './config.js';

/**
 * Fetch voting songs
 * @returns {Promise}
 */
export async function fetchVotingSongs() {
  return await get(API_ENDPOINTS.VOTING_SONGS);
}

/**
 * Submit a vote
 * @param {string} songId
 * @param {string} userId
 * @returns {Promise}
 */
export async function submitVote(songId, userId = null) {
  return await post(API_ENDPOINTS.SUBMIT_VOTE, {
    songId,
    userId,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Fetch voting results
 * @returns {Promise}
 */
export async function fetchVotingResults() {
  return await get(API_ENDPOINTS.VOTING_RESULTS);
}

export default {
  fetchVotingSongs,
  submitVote,
  fetchVotingResults,
};


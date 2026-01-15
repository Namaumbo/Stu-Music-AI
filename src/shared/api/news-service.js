/**
 * News Service - API calls for news articles
 */

import { get } from './client.js';
import { API_ENDPOINTS } from './config.js';

/**
 * Fetch news categories
 * @returns {Promise}
 */
export async function fetchCategories() {
  return await get(API_ENDPOINTS.NEWS_CATEGORIES);
}

/**
 * Fetch news articles
 * @param {Object} params - { category, search, sort, page, limit }
 * @returns {Promise}
 */
export async function fetchArticles(params = {}) {
  return await get(API_ENDPOINTS.NEWS_ARTICLES, params);
}

/**
 * Fetch article by slug
 * @param {string} slug
 * @returns {Promise}
 */
export async function fetchArticleBySlug(slug) {
  return await get(API_ENDPOINTS.NEWS_ARTICLE(slug));
}

export default {
  fetchCategories,
  fetchArticles,
  fetchArticleBySlug,
};


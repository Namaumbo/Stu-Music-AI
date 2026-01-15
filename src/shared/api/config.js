/**
 * API Configuration
 * 
 * TODO: Replace DUMMY_API_BASE with your actual backend URL
 */

// Dummy API base URL - replace with actual backend URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://dummy-api.nyasabeats.com';

// API Endpoints
export const API_ENDPOINTS = {
  // Albums
  ALBUMS: '/api/albums',
  ALBUM_DETAILS: (id) => `/api/albums/${id}`,
  ALBUM_TRACKS: (id) => `/api/albums/${id}/tracks`,
  
  // Tracks
  TRACKS: '/api/tracks',
  RECENT_TRACKS: '/api/tracks/recent',
  POPULAR_TRACKS: '/api/tracks/popular',
  
  // Voting
  VOTING_SONGS: '/api/voting/songs',
  SUBMIT_VOTE: '/api/voting/vote',
  VOTING_RESULTS: '/api/voting/results',
  
  // News
  NEWS_ARTICLES: '/api/news/articles',
  NEWS_ARTICLE: (slug) => `/api/news/${slug}`,
  NEWS_CATEGORIES: '/api/news/categories',
  
  // Studios
  STUDIOS: '/api/studios',
  STUDIO_DETAILS: (id) => `/api/studios/${id}`,
  
  // Analysis
  UPLOAD_SONG: '/api/analysis/upload',
  ANALYZE_SONG: '/api/analysis/analyze',
  PRODUCERS: '/api/producers',
  REQUEST_FEEDBACK: '/api/analysis/feedback',
};


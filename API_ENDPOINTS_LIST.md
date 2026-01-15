# API Endpoints List

## Backend Endpoints Needed

Replace the dummy URL in `.env.local` with your actual backend URL.

### Albums
- `GET /api/albums` - List all albums (with search, sort, pagination)
- `GET /api/albums/:id` - Get album details
- `GET /api/albums/:id/tracks` - Get album tracks

### Tracks
- `GET /api/tracks` - List all tracks
- `GET /api/tracks/recent` - Get recent tracks
- `GET /api/tracks/popular` - Get popular tracks

### Voting
- `GET /api/voting/songs` - Get songs for voting
- `POST /api/voting/vote` - Submit a vote (body: `{ songId, userId, timestamp }`)
- `GET /api/voting/results` - Get voting results

### News
- `GET /api/news/categories` - Get news categories
- `GET /api/news/articles` - List articles (with category, search, sort)
- `GET /api/news/:slug` - Get article by slug

### Studios
- `GET /api/studios` - List all studios (with search, location)
- `GET /api/studios/:id` - Get studio details

### Analysis
- `POST /api/analysis/upload` - Upload song (multipart/form-data with file)
- `POST /api/analysis/analyze` - Analyze song (body: `{ fileId, analysisType, targetGenre }`)
- `GET /api/producers` - Get list of producers
- `POST /api/analysis/feedback` - Request producer feedback

## Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update with your backend URL:
   ```bash
   VITE_API_BASE_URL=http://localhost:3000
   ```

## Usage Example

```javascript
import { albumService, votingService } from '@/shared/api';

// Fetch albums
const albums = await albumService.fetchAlbums({ sort: 'popular' });

// Submit vote
await votingService.submitVote('song-id-123');
```

## All Services Available

- `albumService` - Album operations
- `tracksService` - Track/song operations  
- `votingService` - Voting operations
- `newsService` - News article operations
- `studiosService` - Studio operations
- `analysisService` - Song upload and analysis

**Total: 17 endpoints across 6 services**


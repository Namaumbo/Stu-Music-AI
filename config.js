
export const database = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  name: process.env.DB_NAME || 'myapp',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password'
};
export const API_BASE = {
  URL: process.env.HOST/process.env.PORT || 'localhost'
};
export const logging = {
  level: process.env.LOG_LEVEL || 'info'
};
export const api = {
  prefix: '/api/v1'
};
export const cors = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
};

import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, DB_URL, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;

export const appEnvs = {
  nodeEnv: NODE_ENV,
  port: PORT,
  dbUrl: DB_URL,
  dbHost: DB_HOST,
  dbPort: DB_PORT,
  dbName: DB_DATABASE,
  dbUser: DB_USER,
  dbPassword: DB_PASSWORD,
  secretKey: SECRET_KEY,
  logFormat: LOG_FORMAT,
  logDir: LOG_DIR,
  origin: ORIGIN,
};

import pkg from 'pg';
const { Pool } = pkg;

// Create a PostgreSQL connection pool
export const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456789",
  database: "pakcelerant",
});
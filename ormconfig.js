import './bootstrap';

module.exports = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: process.env.TYPEFORM_MIGRATIONS,
  cli: {
    migrationsDir: process.env.TYPEFORM_MIGRATIONS_DIR,
  }
}
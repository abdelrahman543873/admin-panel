import { DataSource } from 'typeorm';

const source = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3307,
  username: 'Admin',
  password: 'adminPass',
  database: 'admindb',
  entities: ['**/**.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['src/database/*.ts'],
});

export default source;

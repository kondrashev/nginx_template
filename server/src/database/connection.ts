import { Sequelize } from 'sequelize';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connection: any = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

export default connection;

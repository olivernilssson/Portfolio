import dotenv from 'dotenv';
dotenv.config();

export const config = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}
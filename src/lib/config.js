import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export const config = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}
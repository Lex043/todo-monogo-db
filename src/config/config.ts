import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 3000;
const MONGO_URI = process.env.MONGO_URI ?? '';

export const config = {
    server: {
        port: SERVER_PORT,
    },
    mongo: {
        url: MONGO_URI,
    },
};

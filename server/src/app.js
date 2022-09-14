// app.js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';

require('dotenv').config();

const connection_url = process.env.MONGO_URL;

try {
    (async () => {
        console.log(connection_url);
        await mongoose.connect(connection_url);
    })()
}
catch (err) {
    console.log('Mongoose connection error:', err);
    throw err;
}


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', router);

export default app;

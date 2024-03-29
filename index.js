import Koa from 'koa';
import mongoose from 'mongoose';
import { koaBody } from 'koa-body';
import serve from 'koa-static';
import cors from '@koa/cors';
import 'dotenv/config';

import router from './src/router.js';
import errorMiddleware from './src/middlewares/error.js';

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 4000;

const app = new Koa();

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL);

        app.listen(PORT, console.log(`server is running on port: ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

app.use(errorMiddleware);
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(koaBody({ multipart: true }));
app.use(serve('static'));
app.use(router.routes());
app.use(router.allowedMethods());

startApp();

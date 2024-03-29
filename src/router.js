import Router from '@koa/router';

import authRouter from './routers/auth.js';
import realtyRouter from './routers/realty.js';
import signUploadFormRouter from './routers/signUploadForm.js';
import locationRouter from './routers/location.js';
import favoriteRouter from './routers/favorite.js';

const router = new Router();

router
    .use(authRouter)
    .use(realtyRouter)
    .use(signUploadFormRouter)
    .use(locationRouter)
    .use(favoriteRouter)

export default router;

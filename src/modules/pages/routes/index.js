import { Router } from 'express';
import pagesRouter from './Pages';


const moduleRouter = Router()
    .use(pagesRouter);

export default moduleRouter



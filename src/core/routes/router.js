import { Router } from 'express';
import pagesRouter from '../../modules/pages/routes'

const modulesRouter = [
    pagesRouter
]

const router = Router();

for(let moduleRouter of modulesRouter){
    router.use('/', moduleRouter)
}

export default router;

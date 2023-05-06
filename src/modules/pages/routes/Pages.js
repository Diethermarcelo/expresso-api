import { Router } from 'express';
import PagesController from '../controllers/PagesController';

let pagesRouter = Router();

pagesRouter.get('/', (req,res) => PagesController.index(req, res));

pagesRouter.post('/', (req, res) => PagesController.create(req, res));

pagesRouter = Router().use('/pages', pagesRouter);

export default pagesRouter


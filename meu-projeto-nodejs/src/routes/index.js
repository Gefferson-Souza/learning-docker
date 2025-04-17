import { Router } from 'express';
// Certifique-se de incluir a extensão .js na importação
import IndexController from '../controllers/index.js';

const router = Router();
const indexController = new IndexController();

router.get('/', indexController.getIndex.bind(indexController));

export default router;
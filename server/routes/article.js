import express from 'express';

import * as ArticleController from '../controllers/article';

const router = express.Router();

router.post('/articles', ArticleController.create);
router.get('/articles', ArticleController.getAll);
router.delete('/articles/:id', ArticleController.removeArticle);
router.get('/articles/:id', ArticleController.getNewsById);
router.put('/articles/:id', ArticleController.updateArticle);

export default router;
import express from 'express';

import * as UserController from '../controllers/user';

const router = express.Router();

router.get('/current-user', UserController.getCurrentUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/user/:id', UserController.updateUser);

export default router;
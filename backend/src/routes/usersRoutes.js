import express from 'express';
import { getUsers, updateUser } from '../controller/usersController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const usersRoutes = express.Router();

usersRoutes.use(authMiddleware);

usersRoutes.get('/', getUsers);
usersRoutes.put('/:id', updateUser);

export default usersRoutes;
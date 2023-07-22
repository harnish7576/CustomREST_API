import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createUser, getUser, getUserById, deleteUser, UpdateUser } from '../controllers/users.js';

const router = express.Router()

// all routes here are starting with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserById)

router.delete('/:id', deleteUser);

router.patch('/:id', UpdateUser);

export default router;
import express from 'express';
import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    deleteAllUsers,
    createUser,
    loginUser
} from '../controllers/user.js';
import authMiddleware from '../middlewares/auth.js';

// Router /users
const router = express.Router();

// HTTP verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.post('/', createUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
router.delete('/', authMiddleware, deleteAllUsers);
router.post('/login', loginUser);

export default router;
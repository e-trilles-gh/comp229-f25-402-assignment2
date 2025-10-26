import express from 'express';
import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
} from '../controllers/user.js';

// Router /users
const router = express.Router();

// HTTP verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
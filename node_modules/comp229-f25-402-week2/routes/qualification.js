import express from 'express';
import {
    getAllQualifications,
    getQualificationById,
    updateQualification,
    deleteQualification,
    createQualification
} from '../controllers/qualification.js';
import authMiddleware from '../middlewares/auth.js';

// Router /qualifications
const router = express.Router();

// HTTP verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', authMiddleware, getAllQualifications);
router.get('/:id', authMiddleware, getQualificationById);
router.post('/', authMiddleware, createQualification);
router.put('/:id', authMiddleware, updateQualification);
router.delete('/:id', authMiddleware, deleteQualification);

export default router;
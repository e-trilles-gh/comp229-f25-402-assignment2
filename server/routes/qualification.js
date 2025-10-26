import express from 'express';
import {
    getAllQualifications,
    getQualificationById,
    updateQualification,
    deleteQualification,
    createQualification
} from '../controllers/qualification.js';

// Router /qualifications
const router = express.Router();

// HTTP verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', getAllQualifications);
router.get('/:id', getQualificationById);
router.post('/', createQualification);
router.put('/:id', updateQualification);
router.delete('/:id', deleteQualification);

export default router;
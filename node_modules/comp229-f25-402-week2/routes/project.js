import express from 'express';
import {
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    createProject
} from '../controllers/project.js';

// Router /projects
const router = express.Router();

// HTTP verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
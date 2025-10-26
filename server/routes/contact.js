import express from 'express';
import {
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
    createContact
} from '../controllers/contact.js';

// Router /projects
const router = express.Router();

// HTTP verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
import express from 'express';
import { helloWorld, goodbyeWorld } from '../controllers/homeController.js';

// control all the logic for different paths

const router = express.Router();

router.get('/hello', helloWorld);
router.get('/goodbye', goodbyeWorld);

export default router;
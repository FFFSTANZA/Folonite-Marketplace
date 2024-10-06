import express from 'express';
import { createTemplate, getAllTemplates, getTemplateById, updateTemplate, deleteTemplate } from '../controllers/templateController.js';

const router = express.Router();

// Define routes for templates
router.post('/', createTemplate);
router.get('/', getAllTemplates);
router.get('/:id', getTemplateById);
router.put('/:id', updateTemplate);
router.delete('/:id', deleteTemplate);

export default router;

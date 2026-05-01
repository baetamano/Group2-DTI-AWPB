import express from 'express';
import { getSubmissionWindow, updateSubmissionWindow } from '../controller/submissionWindowController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const submissionWindowRoutes = express.Router();

submissionWindowRoutes.use(authMiddleware);

submissionWindowRoutes.get('/', getSubmissionWindow);
submissionWindowRoutes.put('/', updateSubmissionWindow);

export default submissionWindowRoutes;
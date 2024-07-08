import express from 'express';
import { filesControllers } from '../controllers/files.controller.js';

const router = express.Router();

router.route('/data').get(filesControllers.getAllFiles);

router.route('/list').get(filesControllers.getFileNames);

export { router };

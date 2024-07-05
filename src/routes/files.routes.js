import { Router } from 'express';
import { filesControllers } from '../controllers/files.controller.js';

const router = Router();

router.route('/data').get(filesControllers.getAllFiles);

router.route('/list').get(filesControllers.getFileNames);

export { router };

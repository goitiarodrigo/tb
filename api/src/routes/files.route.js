import express from 'express';
import { filesControllers } from '../controllers/files.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: Rutas para manejar archivos
 */

/**
 * @swagger
 * /files/data:
 *   get:
 *     summary: Retrieve files
 *     tags: [Files]
 *     parameters:
 *       - in: query
 *         name: filename
 *         schema:
 *           type: string
 *         description: The name of the file to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the file(s)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 */
router.route('/data').get(filesControllers.getAllFiles);

/**
 * @swagger
 * /files/list:
 *   get:
 *     summary: Retrieve the list of file names
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of file names
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileListResponse'
 */
router.route('/list').get(filesControllers.getFileNames);

export { router };

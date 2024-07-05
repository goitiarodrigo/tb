import { filesServices } from '../services/files.service.js';

export const filesControllers = {
    getAllFiles: async (req, res) => {
        try {
            let response;
            const { fileName } = req.query;

            if (!fileName) {
                const files = await filesServices.getFiles();

                response = await filesServices.processCsvFile(files);
            } else {
                response = await filesServices.processCsvFile([fileName]);
            }

            return res.status(200).json({ success: true, data: response });
        } catch (error) {
            return res.status(400).json({ success: false, msg: error.message });
        }
    },

    getFileNames: async (req, res) => {
        try {
            const response = await filesServices.getFiles();

            return res.status(200).json({ success: true, data: response });
        } catch (error) {
            return res.status(400).json({ success: false, msg: error.message });
        }
    },
};

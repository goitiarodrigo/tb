import axios from 'axios';
import { processCsv } from '../utils/csv.utils.js';
import dotenv from 'dotenv';

dotenv.config();

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`,
    },
};

const { EXTERNAL_BASE_URL } = process.env;

export const filesServices = {
    getFiles: async () => {
        try {
            const response = await axios.get(
                `${EXTERNAL_BASE_URL}/files`,
                headers,
            );
            if (response.status === 200 && response.data.files) {
                return response.data.files;
            } else {
                throw new Error('Error to get file list');
            }
        } catch (error) {
            console.log(error);
            throw new Error('Error to get file list: ', error.message);
        }
    },

    processCsvFile: async (files) => {
        try {
            const promises = files.map(async (file) => {
                try {
                    const response = await axios.get(
                        `${EXTERNAL_BASE_URL}/file/${file}`,
                        headers,
                    );
                    if (response.status !== 200) {
                        throw new Error(
                            `Error to get file: ${response.data.message}`,
                        );
                    }
                    const csvData = response.data;
                    const processed = await processCsv(csvData);
                    return { file, success: true, data: processed };
                } catch (error) {
                    console.error(
                        `Error processing file ${file}:`,
                        error.message,
                    );
                    return { file, success: false, error: error.message };
                }
            });

            const results = await Promise.allSettled(promises);

            const successfulResults = results
                .filter(
                    (result) =>
                        result.status === 'fulfilled' &&
                        result.value.success &&
                        result.value.data,
                )
                .map((result) => result.value.data);

            const failedResults = results
                .filter(
                    (result) =>
                        result.status === 'rejected' ||
                        (result.status === 'fulfilled' &&
                            !result.value.success),
                )
                .map((result) => ({
                    file: result.value ? result.value.file : null,
                    error: result.reason
                        ? result.reason.message
                        : result.value.error,
                }));

            if (failedResults.length > 0) {
                console.error('Failed files:', failedResults);
            }

            return successfulResults;
        } catch (error) {
            console.log(error);
            throw new Error('Error to process csv file: ', error.message);
        }
    },
};

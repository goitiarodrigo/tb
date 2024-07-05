import csvParser from 'csv-parser';
import { Readable } from 'stream';

/**
 * Process csv file and return data as array of objects
 * @param  {} csvData
 * @returns ArrayList
 *
 */
export const processCsv = async (csvData) => {
    let file = '';
    let lines = [];
    let finalResult = {};

    return new Promise((resolve, reject) => {
        const stream = Readable.from(csvData);
        stream
            .pipe(csvParser())
            .on('data', (data) => {
                const isValid = dataValidator(data);
                if (isValid) {
                    const transformedData = transformCsvData(data);
                    lines = [...lines, transformedData];
                    file = data.file;
                }
            })
            .on('end', () => {
                finalResult = lines.length > 0 ? { file, lines } : null;
                resolve(finalResult);
                console.log('Successfully');
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

/**
 * Return new object from csv data
 * @param csvData
 * @returns newObject
 */
const transformCsvData = (csvData) => {
    const newObject = {
        text: csvData.text,
        number: csvData.number,
        hex: csvData.hex,
    };

    return newObject;
};

/**
 * Return boolean if datarow is valid
 * @param {row} data
 * @returns boolean
 */
const dataValidator = (data) => {
    const requiredProperties = ['file', 'text', 'number', 'hex'];

    const isValid = requiredProperties.every(
        (key) => data.hasOwnProperty(key) && data[key].length > 0,
    );

    return isValid;
};

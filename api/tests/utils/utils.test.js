import { describe, it } from 'mocha';
import chai from 'chai';
import { Readable } from 'stream';

import { processCsv, transformCsvData } from '../../src/utils/csv.utils.js';

const { expect } = chai;

describe('Test utils functions', () => {
    describe('Test processCsv function', () => {
        it('should return an array of objects', async () => {
            const csvData = [
                'file,text,number,hex',
                'test3.csv,rFHXOhcFFPKHlOKlq,657367960,9e7385f5b421daeade53261868d3cdb5',
                'test3.csv,uzGAMiLpqWEHlCtLqhqhpmba,69294684,12885fc7bb688f6d4c254841b45f34a4',
                'test3.csv,GnRlcSsxYJpNVt,,6f66f44012c2376f42e43b8142038275',
            ].join('\n');

            const readableStream = Readable.from([csvData]);
            const result = await processCsv(readableStream);
            expect(result).to.be.an('object');
            expect(result).to.deep.equal({
                file: 'test3.csv',
                lines: [
                    {
                        text: 'rFHXOhcFFPKHlOKlq',
                        number: '657367960',
                        hex: '9e7385f5b421daeade53261868d3cdb5',
                    },
                    {
                        text: 'uzGAMiLpqWEHlCtLqhqhpmba',
                        number: '69294684',
                        hex: '12885fc7bb688f6d4c254841b45f34a4',
                    },
                ],
            });
        });

        it('should return null when csvData is empty', async () => {
            const csvData = ['file,text,number,hex'];
            const readableStream = Readable.from([csvData]);
            const result = await processCsv(readableStream);

            expect(result).to.be.null;
        });

        it('should reject error for invalid csvData', () => {
            const csvData = 'invalid csv data';
            const readableStream = Readable.from([csvData]);
            const result = processCsv(readableStream);

            result.catch((error) => {
                expect(error).to.be.an('error');
            });
        });
    });

    describe('Test transforCsvData', () => {
        it('should return object transformed from csvData', () => {
            const csvDataRow = {
                file: 'test9.csv',
                text: 'TXVLxqPkntwxA',
                number: '33586505631158747907533944950854',
                hex: 'f850fb9c3c95004a94e1b7b51b82f349',
            };

            const dataTransformed = transformCsvData(csvDataRow);

            expect(dataTransformed).to.be.an('object');
            expect(dataTransformed).to.deep.include({
                text: 'TXVLxqPkntwxA',
                number: '33586505631158747907533944950854',
                hex: 'f850fb9c3c95004a94e1b7b51b82f349',
            });
        });
    });
});

import { describe, it } from 'mocha';
import chai from 'chai';
const { expect } = chai;

import { filesServices } from '../../src/services/files.service.js';
import { filesControllers } from '../../src/controllers/files.controller.js';

let req, res;

beforeEach(() => {
    req = { query: {} };
    res = {
        status: function (statusCode) {
            this.statusCode = statusCode;
            return this;
        },
        json: function (payload) {
            this.body = payload;
        },
    };
});

describe('Files Controller', () => {
    describe('getAllFiles', () => {
        it('should call getFiles and processCsvFile if no query param is provided', async () => {
            filesServices.getFiles = async () => [
                'test2.csv',
                'test3.csv',
                'test18.csv',
            ];
            filesServices.processCsvFile = async () => [
                {
                    file: 'test2.csv',
                    lines: [
                        {
                            text: 'kUyISyUAZkDIuDyCNbir',
                            number: '517971432',
                            hex: '434b252debfa0145daa57c901e680fd8',
                        },
                    ],
                },
            ];

            await filesControllers.getAllFiles(req, res);

            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('success', true);
            expect(res.body).to.have.property('data').that.is.an('array');
            expect(res.body.data[0]).to.deep.include({
                file: 'test2.csv',
                lines: [
                    {
                        text: 'kUyISyUAZkDIuDyCNbir',
                        number: '517971432',
                        hex: '434b252debfa0145daa57c901e680fd8',
                    },
                ],
            });
        });

        it('should call processCsvFile with the provided query param', async () => {
            req.query.fileName = 'test2.csv';
            filesServices.processCsvFile = async () => [
                {
                    file: 'test2.csv',
                    lines: [
                        {
                            text: 'kUyISyUAZkDIuDyCNbir',
                            number: '517971432',
                            hex: '434b252debfa0145daa57c901e680fd8',
                        },
                    ],
                },
            ];

            await filesControllers.getAllFiles(req, res);

            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('success', true);
            expect(res.body).to.have.property('data').that.is.an('array');
            expect(res.body.data[0]).to.deep.include({
                file: 'test2.csv',
                lines: [
                    {
                        text: 'kUyISyUAZkDIuDyCNbir',
                        number: '517971432',
                        hex: '434b252debfa0145daa57c901e680fd8',
                    },
                ],
            });
        });

        it('should return an error message if an error occurs', async () => {
            const errorMessage = 'Error occurred';
            filesServices.getFiles = async () => {
                throw new Error(errorMessage);
            };

            await filesControllers.getAllFiles(req, res);

            expect(res.statusCode).to.equal(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('success', false);
            expect(res.body).to.have.property('msg', errorMessage);
        });
    });

    describe('getFilesNames', () => {
        it('should call getFiles and return the list of files', async () => {
            filesServices.getFiles = async () => [
                'test2.csv',
                'test3.csv',
                'test18.csv',
            ];

            await filesControllers.getFileNames(req, res);

            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('success', true);
            expect(res.body).to.have.property('data').that.is.an('array');
            expect(res.body.data).to.include.members([
                'test2.csv',
                'test3.csv',
                'test18.csv',
            ]);
        });
    });
});

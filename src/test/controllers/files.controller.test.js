import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../../src/index.js';
import { filesServices } from '../../src/services/files.service.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing files controllers', () => {
    it('getAllFiles', () => {
        let getFilesStub, processCsvFileStub;

        beforeEach(() => {
            getFilesStub = sinon.stub(filesServices, 'getFiles');
            processCsvFileStub = sinon.stub(filesServices, 'processCsvFile');
        });

        afterEach(() => {
            sinon.restore();
        });

        it('should return processed files when no fileName is provided', async () => {
            const mockFiles = [
                { file: 'file1.csv', rows: [] },
                { file: 'file2.csv', rows: [] },
            ];

            const mockProcessedFiles = [
                { data: 'processedData1' },
                { data: 'processedData2' },
            ];

            getFilesStub.resolves(mockFiles);
            processCsvFileStub.resolves(mockProcessedData);

            const res = await chai.request(app).get('/files/data');

            expect(res).to.have.status(200);
            expect(res.body.success).to.be.true;
            expect(res.body.data).to.deep.equal(mockProcessedData);
        });
    });
});

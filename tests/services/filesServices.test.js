import { describe, it } from "mocha";
import chai from "chai";
import { filesServices } from "../../src/services/files.service.js";

const { expect } = chai;

describe('Test services', () => {

    describe('Test getFiles service', () => {
        it('should return an array of files', async () => {
            const result = await filesServices.getFiles()

            expect(result).to.be.an('array')
            expect(result).to.include.members(['test2.csv', 'test3.csv', 'test18.csv']);

        })
    });

    describe('Test getFile service', () => {
        it('should return a list of file/s if exist at least one', async () => {
            const result = await filesServices.processCsvFile(['test2.csv'])

            expect(result).to.be.an('array')
            
            if (result.length > 0) {
                expect(result[0]).to.be.an('object')
                expect(result[0]).to.have.property('file')
                expect(result[0]).to.have.property('lines')
                expect(result[0].lines[0]).to.have.property('text')
                expect(result[0].lines[0]).to.have.property('number')
                expect(result[0].lines[0]).to.have.property('hex')
            }

        })
    })
})
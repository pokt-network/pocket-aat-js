'use strict';
var expect = require('chai').expect;
var PocketAAT = require('../lib/aat.js').PocketAAT;

const privKey = '7ded200b3000857f8ab0216dddc5926b155b214e4355ff2b988e6aac193364a2';
const pubKey = '040c751fdacf3f68254e6528a6d52b21f705bd4643b5d6c308813d367ca699615f9e1be1b56c973ab8b60ff22d1ebf20c7f33e8726a631ca22d035cd9d75d641bc';

describe('PocketAAT Class tests', () => {
	it('should instantiate a PocketAAT instance', () => {
        var pocketAAT = new PocketAAT("1", "1", "1", "1")

		expect(pocketAAT).to.not.be.an.instanceof(Error);
        expect(pocketAAT).to.be.an.instanceof(PocketAAT);
    }).timeout(0);

	it('AATMessage should be valid', () => {
        var pocketAAT = new PocketAAT("1", "1", "1", "1")

		expect(pocketAAT.message.isValid()).to.equal(true);
    }).timeout(0);

	it('Signing token', () => {
        var pocketAAT = new PocketAAT("1", "1", "1", "1")
		var sign = pocketAAT.sign(privKey)

		expect(sign).to.not.be.empty;
    }).timeout(0);
});

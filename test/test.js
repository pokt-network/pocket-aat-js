'use strict';
var expect = require('chai').expect;
var PocketAAT = require('../lib/aat.js').PocketAAT;

describe('PocketAAT Class tests', () => {
	it('should instantiate a PocketAAT instance', () => {
        var pocketAAT = new PocketAAT("1", "1", "1", "1")

		expect(pocketAAT).to.not.be.an.instanceof(Error);
        expect(pocketAAT).to.be.an.instanceof(PocketAAT);
    }).timeout(0);

	it('AATMessage should be valid', () => {
        var pocketAAT = new PocketAAT("1", "1", "1")

		expect(pocketAAT.isValid()).to.equal(true);
    }).timeout(0);

	it('Signing token', () => {
        var pocketAAT = new PocketAAT("1", "1", "1")
		var sign = pocketAAT.sign("7ded200b3000857f8ab0216dddc5926b155b214e4355ff2b988e6aac193364a2")

		expect(sign).to.not.be.empty;
    }).timeout(0);
});

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
		var sign = pocketAAT.sign()

		console.log(sign)
		expect(sign).to.not.be.empty;
    }).timeout(0);
});

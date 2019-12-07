'use strict';
const expect = require('chai').expect;
const PocketAAT = require('../lib/aat.js').PocketAAT;
// For Testing we are using dummy data, none of the following information is real.
const version = "1.0";
const clientPublicKey = "0x6F5Ec3BCdf9013a5553d53b7a42CBCce4e1B9901";
const applicationPublicKey = "0x80Aa10e5d840db15dDFD3e0B46C63EE9a567780B";
const applicationPrivateKey = "E73BE2AD96721D350CCFAEBF30CB2A4160652940588987EF56A9DD0FAE8042CB";

describe('PocketAAT Class tests', () => {
	it('should instantiate a PocketAAT instance', () => {

        var pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey);
        
		expect(pocketAAT).to.not.be.an.instanceof(Error);
        expect(pocketAAT).to.be.an.instanceof(PocketAAT);
    }).timeout(0);

    it('should fail to instantiate a PocketAAT instance', () => {
        var foo = function() {
            return new PocketAAT(version, clientPublicKey, "");
        };
        expect(foo).to.throw(TypeError);
    }).timeout(0);

	it('AATMessage should be valid', () => {
        var pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey);

		expect(pocketAAT.isValid()).to.equal(true);
    }).timeout(0);

    it('Creating the hash', () => {
        var pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey);

		var hash = pocketAAT.hash();

		expect(hash).to.not.be.empty;
    }).timeout(0);

	it('Signing the token', () => {
        var pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey);
		pocketAAT.sign(applicationPrivateKey);

		expect(pocketAAT.signature).to.not.be.empty;
    }).timeout(0);
});

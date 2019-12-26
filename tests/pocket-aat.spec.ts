import { PocketAAT } from '../src/pocket-aat';
import { expect } from 'chai';
import 'jest';

// For Testing we are using dummy data, none of the following information is real.
const clientPublicKey = '0x6F5Ec3BCdf9013a5553d53b7a42CBCce4e1B9901';
const applicationPublicKey = '0x80Aa10e5d840db15dDFD3e0B46C63EE9a567780B';
const applicationPrivateKey = 'E73BE2AD96721D350CCFAEBF30CB2A4160652940588987EF56A9DD0FAE8042CB';

describe('PocketAAT Class tests', () => {
  describe('Valid AAT parameters', () => {
    it('should instantiate a valid PocketAAT instance', () => {
      var pocketAAT = new PocketAAT(clientPublicKey, applicationPublicKey, applicationPrivateKey);
      expect(pocketAAT).to.not.be.an.instanceof(Error);
      expect(pocketAAT).to.be.an.instanceof(PocketAAT);
      expect(pocketAAT.isValid()).to.equal(true);
    });

    it('should have version 0.0.1', () => {
      var pocketAAT = new PocketAAT(clientPublicKey, applicationPublicKey, applicationPrivateKey);
      expect(pocketAAT).to.not.be.an.instanceof(Error);
      expect(pocketAAT).to.be.an.instanceof(PocketAAT);
      expect(pocketAAT.isValid()).to.equal(true);
      expect(pocketAAT.version).to.equal('0.0.1');
    });
  });

  describe('Invalid AAT parameters', () => {
    it('should fail given an empty clientPublicKey', () => {
      var foo = function() {
        return new PocketAAT('', applicationPublicKey, applicationPrivateKey);
      };
      expect(foo).to.throw(TypeError);
    });

    it('should fail given an empty applicationPublicKey', () => {
      var foo = function() {
        return new PocketAAT(clientPublicKey, '', applicationPrivateKey);
      };
      expect(foo).to.throw(TypeError);
    });

    it('Should fail to sign the token using an empty applicationPrivateKey', () => {
      try {
        new PocketAAT(clientPublicKey, applicationPublicKey, '');
      } catch (error) {
        expect(error).to.be.an.instanceof(Error);
      }
    });
  });
});

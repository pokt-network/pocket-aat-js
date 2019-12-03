/**
 * @description PocketAAT entry point.
 */

 import { sha3_256 } from 'js-sha3';
 import rs = require('jsrsasign');

 const ecdsa = new rs.KJUR.crypto.Signature({ alg: 'SHA256withECDSA' });

export class PocketAAT {
  public readonly version: string;
  public readonly signature: string;
  public readonly clientPublicKey: string;
  public readonly applicationPublicKey: string;

  constructor(version: string, clientPublicKey: string, applicationPublicKey: string) {
    this.version = version;
    this.signature = "";
    this.clientPublicKey = clientPublicKey;
    this.applicationPublicKey = applicationPublicKey;

    if (!this.isValid()) {
      throw new TypeError('Your token is not valid');
    }
  }

  public isValid(): boolean {
    return this.version.length !== 0 && this.clientPublicKey.length !== 0 && this.applicationPublicKey.length !== 0;
  }

  public sign(): string {
    const hash = sha3_256.create();

	console.log(this.toJson());
    hash.update(this.toJson());
    return hash.hex();
  }

  private toJson(): string {
    return JSON.stringify(this);
  }
}

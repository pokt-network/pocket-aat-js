/**
 * @description PocketAAT entry point.
 */

import { sha3_256 } from 'js-sha3';
import ed25519 = require('ed25519');

export class PocketAAT {
  public readonly version: string;
  private applicationSignature: string;
  public readonly clientPublicKey: string;
  public readonly applicationPublicKey: string;

  constructor(version: string, clientPublicKey: string, applicationPublicKey: string) {
    this.version = version;
    this.applicationSignature = '';
    this.clientPublicKey = clientPublicKey;
    this.applicationPublicKey = applicationPublicKey;

    if (!this.isValid()) {
      throw new TypeError('Your token is not valid');
    }
  }

  public sign(privateKey: string): string {
    const secretKey = new Buffer(privateKey, 'utf-8');
    const message = new Buffer(this.encrypt(), 'utf-8');

    var signature = ed25519.Sign(message, secretKey);
    return signature.toString('base64')
  }

  private isValid(): boolean {
    return this.version.length !== 0 && this.clientPublicKey.length !== 0 && this.applicationPublicKey.length !== 0;
  }

  private encrypt(): string {
    const hash = sha3_256.create();

    hash.update(this.toJson());
    return hash.hex();
  }

  private toJson(): string {
    return JSON.stringify(this);
  }
}

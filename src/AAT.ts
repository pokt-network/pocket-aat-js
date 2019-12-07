/**
 * @description PocketAAT entry point.
 */

import { sha3_256 } from 'js-sha3';
import ed25519 = require('ed25519');

export class PocketAAT {
  public readonly version: string;
  public readonly clientPublicKey: string;
  public readonly applicationPublicKey: string;
  private applicationSignature: string;

  constructor(version: string, clientPublicKey: string, applicationPublicKey: string) {
    this.version = version;
    this.applicationSignature = '';
    this.clientPublicKey = clientPublicKey;
    this.applicationPublicKey = applicationPublicKey;

    if (!this.isValid()) {
      throw new TypeError('Invalid properties length.');
    }
  }

  public sign(privateKey: string) {
    const secretKey = new Buffer(privateKey, 'ascii');
    const message = new Buffer(this.hash(), 'ascii');

    const signature = ed25519.Sign(message, secretKey);
    this.applicationSignature = signature.toString('base64');
  }

  public get signature(): string {
    return this.applicationSignature;
  }

  public toJson(): string {
    return JSON.stringify(this);
  }

  private isValid(): boolean {
    return this.version.length !== 0 && this.clientPublicKey.length !== 0 && this.applicationPublicKey.length !== 0;
  }

  private hash(): string {
    const hash = sha3_256.create();

    hash.update(this.toJson());
    return hash.hex();
  }
}

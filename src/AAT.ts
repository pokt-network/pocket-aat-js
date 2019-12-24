/**
 * @description PocketAAT entry point.
 */

import { sha3_256 } from 'js-sha3';
import ed25519 = require('ed25519');
const default_version = "0.0.1";

export class PocketAAT {
  public readonly version: string;
  public readonly clientPublicKey: string;
  public readonly applicationPublicKey: string;
  private applicationSignature: string;

  constructor(version: string = default_version, clientPublicKey: string, applicationPublicKey: string) {
    this.version = version;
    this.applicationSignature = '';
    this.clientPublicKey = clientPublicKey;
    this.applicationPublicKey = applicationPublicKey;

    if (!this.isValid()) {
      throw new TypeError('Invalid properties length.');
    }
  }

  public sign(privateKey: string) {
    if (privateKey.length !== 0) {
      const secretKey = Buffer.from(privateKey, 'ascii');
      const message = Buffer.from(this.hash(), 'ascii');

      const signature = ed25519.Sign(message, secretKey);
      this.applicationSignature = signature.toString('base64');
    } else {
      throw new Error("Private key can't be an empty string");
    }
  }

  public get signature(): string {
    return this.applicationSignature;
  }

  public toJson(): string {
    return JSON.stringify(this);
  }

  public isValid(): boolean {
    return this.version.length !== 0 && this.clientPublicKey.length !== 0 && this.applicationPublicKey.length !== 0;
  }

  public hash(): string {
    const hash = sha3_256.create();

    hash.update(this.toJson());
    return hash.hex();
  }
}

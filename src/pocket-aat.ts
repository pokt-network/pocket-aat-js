import { sha3_256 } from 'js-sha3';
import ed25519 = require('ed25519');

/**
 * @description PocketAAT implementation 
 * (version 0.0.1 of the specification: 
 * https://github.com/pokt-network/pocket-core/blob/staging/doc/application-auth-token.md).
 */
export class PocketAAT {
  public readonly version: string = '0.0.1';
  public readonly clientPublicKey: string;
  public readonly applicationPublicKey: string;
  public readonly applicationSignature: string;

  /**
   * @description PocketAAT constructor, automatically creates the 
   * signature using the privateKey parameter
   * @param clientPublicKey
   * @param applicationPublicKey
   * @param privateKey
   */
  constructor(
    clientPublicKey: string,
    applicationPublicKey: string,
    privateKey: string,
  ) {
    this.clientPublicKey = clientPublicKey;
    this.applicationPublicKey = applicationPublicKey;
    this.applicationSignature = this.sign(
      {
        applicationPublicKey: this.applicationPublicKey,
        clientPublicKey: this.clientPublicKey,
        version: this.version
      },
      privateKey,
    );

    if (!this.isValid()) {
      throw new TypeError('Invalid properties length.');
    }
  }


  /**
   * @description Returns whether or not this is a valid AAT according to the current version.
   */
  public isValid(): boolean {
    return (
      this.version.length !== 0 &&
      this.clientPublicKey.length !== 0 &&
      this.applicationPublicKey.length !== 0 &&
      this.applicationSignature.length !== 0
    );
  }

  /**
   * @description Given an aatPayload object, create a SHA3 hash of it and signs it using privateKey.
   * @param aatPayload 
   * @param privateKey 
   */
  private sign(aatPayload: object, privateKey: string) {
    // Generate sha3 hash of the aat payload object
    const hash = sha3_256.create();
    hash.update(JSON.stringify(aatPayload));
    const bufferPayload = Buffer.from(hash.hex(), 'hex');

    if (privateKey.length !== 0) {
      // Return signed aat payload hash
      const privateKeyBuffer = Buffer.from(privateKey, 'hex');
      const signature = ed25519.Sign(bufferPayload, privateKeyBuffer);
      return signature.toString('hex');
    } else {
      throw new Error("Private key can't be an empty string");
    }
  }
}

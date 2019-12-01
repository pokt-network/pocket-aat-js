import { AATMessage } from './model/AATMessage';
import { decodeString, encodeString } from '@tendermint/amino-js';

export class PocketAAT {
  public readonly version: string;
  public readonly signature: string;
  public readonly message: AATMessage;

  constructor(version: string, signature: string, clientPublicKey: string, applicationPublicKey: string) {
    this.version = version;
    this.signature = signature;
    this.message = new AATMessage(clientPublicKey, applicationPublicKey);

    if (!this.isValid()) {
      throw new TypeError('Your token is not valid');
    }
  }

  public isValid(): boolean {
    return this.version.length !== 0 && this.signature.length !== 0 && this.message.isValid();
  }

  public encode(): Uint8Array {
    return encodeString(this.toJson());
  }

  private toJson(): string {
    return JSON.stringify(this);
  }
}

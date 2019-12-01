export class AATMessage {
  public readonly clientPublicKey: string;
  public readonly applicationPublicKey: string;

  constructor(clientPublicKey: string, applicationPublicKey: string) {
    this.clientPublicKey = clientPublicKey;
    this.applicationPublicKey = applicationPublicKey;
  }

  public isValid(): boolean {
    return this.clientPublicKey.length !== 0 && this.applicationPublicKey.length !== 0;
  }
}

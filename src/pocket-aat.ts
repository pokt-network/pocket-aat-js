import { sha3_256 } from 'js-sha3'
import ed25519 = require('ed25519')
import { Helper } from "./utils/helper"
import { Versions } from './utils/enums'

/**
 * @description PocketAAT implementation 
 * (version 0.0.1 of the specification: 
 * https://github.com/pokt-network/pocket-core/blob/staging/doc/application-auth-token.md).
 */
export class PocketAAT {
  /**
   *
   * Creates a PocketAAT object, automatically creates the 
   * signature using the provided parameters
   * @param {string} version - Version information.
   * @param {string} clientPublicKey - Client Public Key.
   * @param {string} applicationPublicKey - Application Public Key.
   * @param {string} privateKey - Private Key.
   * @returns {PocketAAT} - Pocket Authentication Token object.
   * @memberof PocketAAT
   */
  public static from(
    version: string,
    clientPublicKey: string,
    applicationPublicKey: string,
    privateKey: string
  ): PocketAAT {
    if (Versions.isSupported(version)) {
      const applicationSignature = this.sign(
        {
          version: version,
          app_address: applicationPublicKey,
          client_pub_key: clientPublicKey,
          signature: ""
        },
        privateKey,
      )
      if (applicationSignature instanceof Error) {
        throw applicationSignature
      }
      return new PocketAAT(version, clientPublicKey, applicationPublicKey, applicationSignature)
    } else {
      throw new TypeError('Provided version is not supported.')
    }
  }

  /**
   * @description Given an aatPayload object, create a SHA3 hash of it and signs it using privateKey.
   * @param aatPayload - Object with the mandatory parameters.
   * @param privateKey - Private Key
   */
  private static sign(aatPayload: object, privateKey: string): string | Error {
    // Generate sha3 hash of the aat payload object
    const hash = sha3_256.create()
    hash.update(JSON.stringify(aatPayload))
    const bufferPayload = Buffer.from(hash.hex(), 'hex')

    if (Helper.byteLength(privateKey) === 64 && Helper.validateHexStr(privateKey)) {
      // Return signed aat payload hash
      const privateKeyBuffer = Buffer.from(privateKey, 'hex')
      const signature = ed25519.Sign(bufferPayload, privateKeyBuffer)

      return this.sliceBuffer(signature).toString("hex")
  } else {
      throw new TypeError("Private key should be a 64 bytes Hex string")
    }
  }
  /**
   * @description Given a signature Buffer, returns a 32 bytes signature.
   * @param obj - Signature Buffer.
   * @returns {Buffer} - 32 bytes Signature Buffer.
   * @memberof PocketAAT
   */
  private static sliceBuffer(obj: Buffer): Buffer | Error {
    if (obj.byteLength === 64) {
      return obj.slice(0, obj.byteLength / 2)
    } else if (obj.byteLength === 32) {
      return obj
    }
    return new Error("Invalid signature, the result should be 64 or 32 bytes length.")
  }

  public readonly version: string = Versions["0.0.1"].toString()
  public readonly clientPublicKey: string
  public readonly applicationPublicKey: string
  public readonly applicationSignature: string

  /**
   * @description PocketAAT constructor
   * @param {string} version - Version information.
   * @param {string} clientPublicKey - Client Public Key.
   * @param {string} applicationPublicKey - Application Public Key.
   * @param {string} applicationSignature - Application Signature.
   */
  constructor(
    version: string,
    clientPublicKey: string,
    applicationPublicKey: string,
    applicationSignature: string
  ) {
    this.version = version
    this.clientPublicKey = clientPublicKey
    this.applicationPublicKey = applicationPublicKey
    this.applicationSignature = applicationSignature

    if (!this.isValid()) {
      throw new TypeError('Invalid properties format.')
    }
  }

  /**
   * @description Returns whether or not this is a valid AAT according to the current version.
   */
  public isValid(): boolean {
    return (
      this.version.length !== 0 &&
      Helper.byteLength(this.clientPublicKey) === 32 && Helper.validateHexStr(this.clientPublicKey) &&
      Helper.byteLength(this.applicationPublicKey) === 32 && Helper.validateHexStr(this.applicationPublicKey) &&
      Helper.validateHexStr(this.applicationSignature)
    )
  }
}

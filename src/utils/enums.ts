/**
 *
 * Versions enum
 */
export enum Versions {
  '0.0.1' = '0.0.1',
}

export namespace Versions {
  /**
   *
   * Checks if the provided version is supported
   * 
   * @param {string} str - Provided version string.
   * @returns {boolean} - If is supported or not.
   * @memberof Versions
   */
  export function isSupported(version: string): boolean {
    switch (version) {
      case Versions['0.0.1'].toString():
        return true
      case '':
        return false
      default:
        return false
    }
  }
}

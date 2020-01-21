
export class Helper {

    /**
     * referenced from https://stackoverflow.com/a/10121740
     * Checks the lenght of a provided string
     * @param {string} str - Provided string.
     * @returns {number} - The string lenght in bytes.
     * @memberof Helper
     */
    public static byteLength(str: string): number {
        const a = []
        for (let i = 0; i < str.length; i += 2) {
            a.push(str.substr(i, 2))
        }

        return a.length
    }

    /**
     * referenced from https://www.sitepoint.com/community/t/how-to-check-if-string-is-hexadecimal/162739/2
     * Checks if the provided string is a valid Hex.
     * @param {string} str - Provided string.
     * @returns {boolean} - If is a valid Hex string or not.
     * @memberof Helper
     */
    public static validateHexStr(str: string): boolean {
        const re = /[0-9A-Fa-f]/g

        if (re.test(str)) {
            return true
        }
        return false
    }
}

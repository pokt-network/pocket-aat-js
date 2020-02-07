import { PocketAAT } from '../src/pocket-aat'
import { expect } from 'chai'

// For Testing we are using dummy data, none of the following information is real.
const version = '0.0.1'
const clientPublicKey = '97fe41b7f3abb5fca19f35c297377a263407b7be346b597566491c9cbfb55f75'
const applicationPublicKey = '22639322e947a10717e0ca9906a5035f916a36d991829315809226ad62a7db03'
const applicationPrivateKey = '882088706a9d2dacdf7143df8b9608c66829f382b58664060953f642feec34bb22639322e947a10717e0ca9906a5035f916a36d991829315809226ad62a7db03'
const applicationSignature = 'e911fa937b107f3811d35383ea2b85dfeb3ff2d19e1a9ec7adc8517feabdcc7bb4e77cac547a2fd72c24c4f2105f39fa736d6ba2c75aec0a0b1638a2160f8c03'

const invalidHexClientPublicKey = 'z6d04zz2490e85f3f9ade95w80948816bd9b2986d5554aae347e7d21d93w6fb5'
const invalidHexApplicationPublicKey = 'w9c7f275388ca1f87900945wza7f3a90fa9bba78f158c070aa12e3eccf53a2eb'
const invalidHexApplicationPrivateKey = '15f53145bfa6efdde6e65ce5ebfd330ac0a2591ae451a8a03ace99eff894b9eed9c7f275388ca1f87900945dba7f3a90fa9bba78f158c070aa12e3eccf53a2eb'
const invalidHexApplicationSignature = '7z3706wwe9a5248187cb58cf1d65f12d93c7dfc500de8cfe76b6f925f450d1678ccba666a0374fc83f89f986fc1af640a6000a6b94dd0c9a87d9060613c6z504'
const invalidApplicationSignature = '7c3706ece9a5248187ca58cf1d65f12d93c7dfc500de8cfe76b6f925f450d1678ccba666a0374fc83f89f986fc1af640a6000a6b94dd0c9a87d9060613c6b504'

describe('PocketAAT Class tests', () => {
    describe('Valid AAT parameters', () => {
        it('should create a valid PocketAAT instance', () => {
            const pocketAAT = PocketAAT.from(version, clientPublicKey, applicationPublicKey, applicationPrivateKey)
            expect(pocketAAT).to.not.be.an.instanceof(TypeError)
            expect(pocketAAT).to.be.an.instanceof(PocketAAT)
            expect(pocketAAT.isValid()).to.equal(true)
        })

        it('should create a valid PocketAAT instance with an already created signature', () => {
            const pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey, applicationSignature)
            expect(pocketAAT).to.not.be.an.instanceof(TypeError)
            expect(pocketAAT).to.be.an.instanceof(PocketAAT)
            expect(pocketAAT.isValid()).to.equal(true)
        })
    })
    describe('Invalid Hex AAT parameters', () => {
        it('should fail given an invalid hex clientPublicKey', () => {
            try {
                const pocketAAT = PocketAAT.from(version, invalidHexClientPublicKey, applicationPublicKey, applicationPrivateKey)
            } catch (error) {
                expect(error).to.be.an.instanceof(TypeError)
            }
        })

        it('should fail given an invalid hex applicationPublicKey', () => {
            const foo = function () {
                return PocketAAT.from(version, clientPublicKey, invalidHexApplicationPublicKey, applicationPrivateKey)
            }
            expect(foo).to.throw(Error)
        })

        it('should fail given an invalid hex applicationPrivateKey', () => {
            try {
                const pocketAAT = PocketAAT.from(version, clientPublicKey, applicationPublicKey, invalidHexApplicationPrivateKey)
            } catch (error) {
                expect(error).to.be.an.instanceof(TypeError)
            }
        })

        it('Should fail given an invalid hex Application Signature', () => {
            try {
                const pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey, invalidHexApplicationSignature)
            } catch (error) {
                expect(error).to.be.an.instanceof(Error)
            }
        })
    })
    describe('Unsupported or invalid AAT Scenarios', () => {
        it('should fail given an unsupported version', () => {
            const foo = function () {
                return PocketAAT.from("1.0.2", clientPublicKey, applicationPublicKey, applicationPrivateKey)
            }
            expect(foo).to.throw(Error)
        })
        it('should fail given an Application Signature that isnt related to the Application Public Key', () => {
            try {
                const pocketAAT = new PocketAAT(version, clientPublicKey, applicationPublicKey, invalidApplicationSignature)
            } catch (error) {
                expect(error).to.be.an.instanceof(Error)
            }
        })
    })
    describe('Wrong AAT parameters', () => {
        it('should fail given an empty version', () => {
            const foo = function () {
                return PocketAAT.from("", clientPublicKey, applicationPublicKey, applicationPrivateKey)
            }
            expect(foo).to.throw(TypeError)
        })

        it('should fail given an empty clientPublicKey', () => {
            const foo = function () {
                return PocketAAT.from(version, "", applicationPublicKey, applicationPrivateKey)
            }
            expect(foo).to.throw(TypeError)
        })

        it('should fail given an empty applicationPublicKey', () => {
            const foo = function () {
                return PocketAAT.from(version, clientPublicKey, "", applicationPrivateKey)
            }
            expect(foo).to.throw(TypeError)
        })

        it('should fail given an empty applicationPrivateKey', () => {
            const foo = function () {
                return PocketAAT.from(version, clientPublicKey, applicationPublicKey, "")
            }
            expect(foo).to.throw(TypeError)
        })
    })
})

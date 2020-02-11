<div align="center">
  <a href="https://www.pokt.network">
    <img src="https://user-images.githubusercontent.com/16605170/74199287-94f17680-4c18-11ea-9de2-b094fab91431.png" alt="Pocket Network logo" width="340"/>
  </a>
</div>

# Pocket-AAT-JS

Generate to-spec AAT tokens for your Pocket JavaScript applications easily using this SDK. Current supported version of the AAT specification supported by this library: `0.0.1`. For more details, please reference the [AAT documentation](https://github.com/pokt-network/pocket-core/blob/staging/doc/application-auth-token.md).
<div>
  <a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"><img src="https://img.shields.io/badge/js-reference-yellow.svg"/></a>
  <a href="https://nodejs.org/"><img  src="https://img.shields.io/badge/node-%3E%3D%2011.6.0-brightgreen"/></a>
</div>

## Overview
<div align="left">
    <a  href="https://github.com/pokt-network/pocket-aat-js/releases"><img src="https://img.shields.io/github/release-pre/pokt-network/pocket-aat-js.svg"/></a>
    <a href="https://circleci.com/gh/pokt-network/pocket-aat-js/tree/master"><img src="https://circleci.com/gh/pokt-network/pocket-aat-js/tree/master.svg?style=svg"/></a>
    <a href="https://github.com/pokt-network/pocket-aat-js/pulse"><img src="https://img.shields.io/github/contributors/pokt-network/pocket-aat-js.svg"/></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/></a>
    <br >
    <a href="https://github.com/pokt-network/pocket-aat-js/pulse"><img src="https://img.shields.io/github/last-commit/pokt-network/pocket-aat-js.svg"/></a>
    <a href="https://github.com/pokt-network/pocket-aat-js/pulls"><img src="https://img.shields.io/github/issues-pr/pokt-network/pocket-aat-js.svg"/></a>
    <a href="https://github.com/pokt-network/pocket-aat-js/issues"><img src="https://img.shields.io/github/issues-closed/pokt-network/pocket-aat-js.svg"/></a>
</div>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

You should have at least have a basic knowledge of blockchain technology and know your way around JavaScript. You will also need to install the [NPM tool](https://www.npmjs.com/get-npm).

### Installation

```
npm install --save pocket-aat-js
```

## Documentation

```javascript
// First require the PocketAAT class
const PocketAAT = require('@pokt-network/aat-js');

// Define the arguments needed to build an AAT
const clientPublicKey = '0x6F5Ec3BCdf9013a5553d53b7a42CBCce4e1B9901';
const applicationPublicKey = '0x80Aa10e5d840db15dDFD3e0B46C63EE9a567780B';
const applicationPrivateKey = 'E73BE2AD96721D350CCFAEBF30CB2A4160652940588987EF56A9DD0FAE8042CB';

// Create a new PocketAAT instance
var pocketAAT = PocketAAT.from(clientPublicKey, applicationPublicKey, applicationPrivateKey);

// Example JSON output
console.log(JSON.stringify(pocketAAT));
> "{\"version\":\"0.0.1\",\"clientPublicKey\":\"0x6F5Ec3BCdf9013a5553d53b7a42CBCce4e1B9901\",\"applicationPublicKey\":\"0x80Aa10e5d840db15dDFD3e0B46C63EE9a567780B\",\"applicationSignature\":\"29cb5d7f9f1424f2c47cb354a7375be18ae85f730bac435155cc060dd52d65eb0002dbad29deda2a8115b6bd447af1158e35d32eb423371bef879fa4bc90840b\"}"
```

## Running the tests

```
npm run test
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pokt-network/pocket-aat-js/blob/master/CONTRIBUTING.md) for details on contributions and the process of submitting pull requests.

## Support & Contact

<div>
  <a  href="https://twitter.com/poktnetwork" ><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
  <a href="https://t.me/POKTnetwork"><img src="https://img.shields.io/badge/Telegram-blue.svg"></a>
  <a href="https://www.facebook.com/POKTnetwork" ><img src="https://img.shields.io/badge/Facebook-red.svg"></a>
  <a href="https://research.pokt.network"><img src="https://img.shields.io/discourse/https/research.pokt.network/posts.svg"></a>
</div>


## License

This project is licensed under the MIT License; see the [LICENSE.md](LICENSE.md) file for details.

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
npm install --save @pokt-network/aat-js
```

## Documentation

```javascript
// First require the PocketAAT class
const PocketAAT = require('@pokt-network/aat-js');

// Define the arguments needed to build an AAT
const clientPublicKey = 'b70382156da53d4274f655961e8b1aa0950aa7f4';
const applicationPublicKey = 'a85f3577dcfe59bfed60b3ed013c739ac875237f98a98735dfa13733b0ced42d';
const applicationPrivateKey = 'f70196f8f9246c957e4947c1be09da98c405aebc1a4e2...';

(async () => {
  try {
      // Create a new PocketAAT instance
      var pocketAAT = await PocketAAT.from('0.0.1', clientPublicKey, applicationPublicKey, applicationPrivateKey);
      
      // Example JSON output
      console.log(JSON.stringify(pocketAAT));
  } catch (e) {
      console.log(e);
  }
})();
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

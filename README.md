<div align="left">
  <a href="https://www.pokt.network">
    <img src="https://pokt.network/wp-content/uploads/2018/12/Logo-488x228-px.png" alt="drawing" width="340"/>
  </a>
</div>
<h1 align="left">pocket-aat-js</h1>
<h4 align="left">

Generate to-spec AAT tokens for your Pocket Javascript applications easily using this SDK. Current supported version of the AAT specification supported by this library: `0.0.1`,
for more details please <a href="https://github.com/pokt-network/pocket-core/blob/staging/doc/application-auth-token.md">see here.</a>
</h4>
</div>

<h1 align="left"> Overview</h1>
  <div align="left">
    <a  href="https://github.com/pokt-network/pocket-aat-js/releases">
      <img src="https://img.shields.io/github/release-pre/pokt-network/pocket-aat-js.svg"/>
    </a>
    <a href="https://circleci.com/gh/pokt-network/pocket-aat-js/tree/staging">
      <img src="https://circleci.com/gh/pokt-network/pocket-aat-js/tree/staging.svg?style=svg"/>
    </a>
    <a  href="https://github.com/pokt-network/pocket-aat-js/pulse">
      <img src="https://img.shields.io/github/contributors/pokt-network/pocket-aat-js.svg"/>
    </a>
    <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg"/>
    </a>
    <br >
    <a href="https://github.com/pokt-network/pocket-aat-js/pulse">
      <img src="https://img.shields.io/github/last-commit/pokt-network/pocket-aat-js.svg"/>
    </a>
    <a href="https://github.com/pokt-network/pocket-aat-js/pulls">
      <img src="https://img.shields.io/github/issues-pr/pokt-network/pocket-aat-js.svg"/>
    </a>
    <a href="https://github.com/pokt-network/pocket-aat-js/releases">
      <img src="https://img.shields.io/badge/platform-nodejs-pink.svg"/>
    </a>
    <a href="https://github.com/pokt-network/pocket-aat-js/issues">
      <img src="https://img.shields.io/github/issues-closed/pokt-network/pocket-aat-js.svg"/>
    </a>
</div>

<h1 align="left">Installation</h1>

`npm install --save pocket-aat-js`

<h1 align="left">Usage</h1>

```javascript
// First require the PocketAAT class
const PocketAAT = require('pocket-aat-js');

// Define the arguments needed to build an AAT
const clientPublicKey = '0x6F5Ec3BCdf9013a5553d53b7a42CBCce4e1B9901';
const applicationPublicKey = '0x80Aa10e5d840db15dDFD3e0B46C63EE9a567780B';
const applicationPrivateKey = 'E73BE2AD96721D350CCFAEBF30CB2A4160652940588987EF56A9DD0FAE8042CB';

// Create a new PocketAAT instance
var pocketAAT = new PocketAAT(clientPublicKey, applicationPublicKey, applicationPrivateKey);

// Example JSON output
console.log(JSON.stringify(pocketAAT));
> "{\"version\":\"0.0.1\",\"clientPublicKey\":\"0x6F5Ec3BCdf9013a5553d53b7a42CBCce4e1B9901\",\"applicationPublicKey\":\"0x80Aa10e5d840db15dDFD3e0B46C63EE9a567780B\",\"applicationSignature\":\"29cb5d7f9f1424f2c47cb354a7375be18ae85f730bac435155cc060dd52d65eb0002dbad29deda2a8115b6bd447af1158e35d32eb423371bef879fa4bc90840b\"}"
```

<h1 align="left">How to test</h1>

`npm run test`

<h1 align="left">Contact</h1>
<div align="left">
  <a  href="https://twitter.com/poktnetwork" >
    <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social">
  </a>
  <a href="https://t.me/POKTnetwork">
    <img src="https://img.shields.io/badge/Telegram-blue.svg">
  </a>
  <a href="https://www.facebook.com/POKTnetwork" >
  <img src="https://img.shields.io/badge/Facebook-red.svg">
  </a>
  <a href="https://research.pokt.network">
  <img src="https://img.shields.io/discourse/https/research.pokt.network/posts.svg">
  </a>
    <a href="https://discord.gg/sarhfXP">
  <img src="https://img.shields.io/discord/553741558869131266?label=Discord">
  </a>
</div>

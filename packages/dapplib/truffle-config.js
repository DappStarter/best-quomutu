require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot blanket response remind purse inside light army gift'; 
let testAccounts = [
"0x04298e481109d6d6b56bffe9a5ec02fffda04cbb1d4a3be4cd5539db4f96b382",
"0x78ca0666788847fb08cc5768e81e31d976d3433eaebcb16d07417679b0676557",
"0xb78a931f712e0546c8bc803fbdb54f4d5234fd6fc909a211815b3991143a1127",
"0xcc3af7f8969a41c77f0b03a22935afed1427144735b841d7d631a78ed60b30b5",
"0xb3cd21a566692241ffa630f80f77e816a50dea4b73f15ca843a60dd428c9d581",
"0xa934812dd347c43d1e8370abf54f879b523853a7322d4f90eea94b1ee13c7790",
"0x0ea630b5186137fe7c2cc8a2143a6ca7436aafc4c9f38f615d2d4d3f2a1b65a0",
"0x61928f888804dbc71fb1df341c8d2aec737777a0cf5916269c509d94ec35c7e7",
"0x23bec1982d296fd10e1a163257e6580937e308cb68c5e972a5cd7c3605857ac7",
"0x5fb7d18db233291d2703c57ac2f755781faaa3ae040259b17b38aea234b6ea92"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


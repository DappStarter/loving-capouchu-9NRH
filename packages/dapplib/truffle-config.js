require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index random magic assume install brave bubble general'; 
let testAccounts = [
"0xbadbc44dc6779bc8bf18c8aa58b24dbc3e094f53c5ce17c49304e8e6266149de",
"0x8dd2705143151d75c3a59fb3b4ec3bd2f1ea0533f038082e67b108482156eb08",
"0x63677eb51424b31b7e040966bbda70f781be93aa2829713ec571a235f875f737",
"0x2312c3a15188101c77a8c4ca341b394d24413a09288376cb29685e2bb1fddb91",
"0xf72f659827c8c6fdfe293c59f15388e040891f2ea5ad49ac2be9b69e4d0b5432",
"0x19458e13df750febe298b5becf1b23605576d1d6cbe28066aa74bb274b97d1ac",
"0xe7734deee87b4a619e86c2d19a5b9ab27f59028566651632b792fb705fae5093",
"0xf3b0fa2fedbabc60410dd6bd1c669b38fda753cf0ce9c05f3b48094e97b5bd91",
"0x3f0df64d9e1350e06a38d856957011b37034752b2ba0ef0e8dc9081de665dc90",
"0xecd0f496e0abb505c075a64635e39cc15cc9a3115226941e6adeae4712f572c3"
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


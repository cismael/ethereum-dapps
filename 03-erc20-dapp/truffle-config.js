/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const path = require("path");
const fs = require('fs');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const INFURA_API_KEY = fs.readFileSync(path.join(__dirname, "../.privatekeys/.infura_api_key")).toString().trim();

const mnemonic = fs.readFileSync(path.join(__dirname, "../.privatekeys/.metamask_wallet_secret")).toString().trim();

const privateKeys = ['0x' + 'PRIVATE_KEYS'];

module.exports = {
  contracts_build_directory: path.join(__dirname, "app/src/_contracts"),
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // NB: It's important to wrap the provider as a function.
    //
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // },

    // ETH NETWORKS ****************************************************************************************************************
    eth: {
      provider: () => new HDWalletProvider(privateKeys, `https://mainnet.infura.io/v3/${INFURA_API_KEY}`),
      network_id: 1,       // ETH Mainnet's id
      gas: 5500000,        // ETH Mainnet has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    eth_ropsten_testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${INFURA_API_KEY}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    eth_rinkeby_testnet: {
      provider: () => new HDWalletProvider(privateKeys, `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Goerli has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    eth_goerli_testnet: {
      provider: () => new HDWalletProvider(privateKeys, `https://goerli.infura.io/v3/${INFURA_API_KEY}`),
      network_id: 5,       // Goerli's id
      gas: 5500000,        // Goerli has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // BINANCE SMARTCHAIN NETWORKS *************************************************************************************************
    bsc: {
      provider: () => new HDWalletProvider(privateKeys, 'https://bsc-dataseed.binance.org/'),
      network_id: 56,      // BSC Mainnet's id
      gas: 5500000,        // BSC Mainnet has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545/'),
      network_id: 97,      // BSC Testnet's id
      gas: 30000000,       // BSC Testnet has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // POLYGON NETWORKS ************************************************************************************************************
    polygon: {
      provider: () => new HDWalletProvider(privateKeys, 'https://rpc-mainnet.matic.network'),
      network_id: 137,     // Polygon's id
      gas: 5500000,        // Polygon has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    polygon_mumbai_testnet: {
      // provider: () => new HDWalletProvider(privateKeys, 'https://rpc-mumbai.matic.today'),
      provider: () => new HDWalletProvider(privateKeys, 'https://rpc-mumbai.maticvigil.com'),
      network_id: 80001,      // Polygon Mumbai Testnet's id
      gas: 5500000,        // Polygon Mumbai Testnet has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // OPTIMISM NETWORKS ***********************************************************************************************************
    // To make a deployment on this network we need to :
    // 1- Install @eth-optimism/solc
    // 2- Change solc version at the "compilers section" of this file and replace it by the one used by @eth-optimism/solc ('node_modules/@eth-optimism/solc')
    // 3- Delete the truffle internal migration file (./migrations/1_initial_migration.js)
    // 4- Eventually change the version of the contract's pragma solidity to use the same version used by @eth-optimism/solc
    optimism: {
      provider: () => new HDWalletProvider(privateKeys, 'https://mainnet.optimism.io'),
      network_id: 10,      // Optimism's id
      gas: 5500000,        // Optimism has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    optimism_kovan_testnet: {
      provider: () => new HDWalletProvider(privateKeys, 'https://kovan.optimism.io'),
      network_id: 69,      // Optimism Kovan Testnet's id
      gas: 15700000,       // Optimism Kovan Testnet has a lower block limit than mainnet
      gasPrice: 15000000,  // Optimism Kovan Testnet has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // KUCOIN COMMUNITY CHAIN NETWORKS *************************************************************************************
    // Interesting for liquidation and arbitrage
    kcc: {
      provider: () => new HDWalletProvider(privateKeys, 'https://rpc-mainnet.kcc.network'),
      network_id: 321,      // Optimism's id
      gas: 5500000,        // Optimism has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    kcc_testnet: {
      provider: () => new HDWalletProvider(privateKeys, 'https://rpc-testnet.kcc.network'),
      network_id: 322,      // Optimism's id
      gas: 5500000,        // Optimism has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // HUOBI HECO NETWORKS *************************************************************************************************
    heco: {
      provider: () => new HDWalletProvider(privateKeys, 'https://http-mainnet.hecochain.com'),
      network_id: 128,      // Optimism's id
      gas: 5500000,        // Optimism has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    heco_testnet: {
      provider: () => new HDWalletProvider(privateKeys, 'https://http-testnet.hecochain.com'),
      network_id: 256,      // Optimism's id
      gas: 5500000,        // Optimism has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
    reporter: 'eth-gas-reporter',
    reporterOptions : { excludeContracts: ['Migrations'] }
  },

  // Set test coverage plugin
  plugins: ["solidity-coverage"],

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      //  evmVersion: "byzantium"
       }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};

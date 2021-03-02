require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    "bsc-testnet": {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        ),
      network_id: 97,
      skipDryRun: true,
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "wss://bsc-ws-node.nariox.org:443"
        ),
      network_id: 56,
      skipDryRun: true,
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    external: {
      command: "node ./compileHasher.js",
      targets: [
        {
          path: "./build/Hasher.json",
        },
      ],
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "",
  },
};

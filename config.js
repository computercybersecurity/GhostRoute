require("dotenv").config();

module.exports = {
  deployments: {
    netId97: {
      bnb: {
        instanceAddress: {
          0.1: "0xCFeE957a4736f03e20053f2496805Eb19f07aC00",
          1: undefined,
          10: undefined,
          100: undefined,
        },
        symbol: "BNB",
        decimals: 18,
      },
      dai: {
        instanceAddress: {
          0.1: "0x83A4e49087f09D810Dd3D6E22313bbC07aE7f5B5",
          1000: undefined,
          10000: undefined,
          100000: undefined,
        },
        tokenAddress: "0x339803818AE60699aC3A1d3298a956547809B92C",
        symbol: "DAI",
        decimals: 18,
      },
    },
  },
};

require("dotenv").config();

module.exports = {
  deployments: {
    netId97: {
      bnb: {
        instanceAddress: {
          1: "0xeD3F303e1dF5631A9eb13a05E08cD114180Aaf10",
          10: undefined,
          100: undefined,
          1000: undefined,
        },
        symbol: "BNB",
        decimals: 18,
      },
      dai: {
        instanceAddress: {
          100: "0x08A7e02b9aA2Cc160a34D6fC29d64CEfa363484f",
          1000: undefined,
          10000: undefined,
          100000: undefined,
        },
        tokenAddress: "0x70b7aa7A5963C4E4F7fB1Abd0d37Fac1a0fF6523",
        symbol: "DAI",
        decimals: 18,
      },
    },
  },
};

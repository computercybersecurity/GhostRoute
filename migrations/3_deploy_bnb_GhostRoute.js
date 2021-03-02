/* global artifacts */
require("dotenv").config({ path: "../.env" });
const BNBGhostRoute = artifacts.require("BNBGhostRoute");
const Verifier = artifacts.require("Verifier");
const hasherContract = artifacts.require("Hasher");

module.exports = function (deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, BNB_AMOUNT } = process.env;
    const verifier = await Verifier.deployed();
    const hasherInstance = await hasherContract.deployed();
    await BNBGhostRoute.link(hasherContract, hasherInstance.address);
    const ghostRoute = await deployer.deploy(
      BNBGhostRoute,
      verifier.address,
      BNB_AMOUNT,
      MERKLE_TREE_HEIGHT,
      accounts[0]
    );
    console.log("BNBGhostRoute's address ", ghostRoute.address);
  });
};

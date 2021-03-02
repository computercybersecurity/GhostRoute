/* global artifacts */
require("dotenv").config({ path: "../.env" });
const BEP20GhostRoute = artifacts.require("BEP20GhostRoute");
const Verifier = artifacts.require("Verifier");
const hasherContract = artifacts.require("Hasher");
const BEP20Mock = artifacts.require("BEP20Mock");

module.exports = function (deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, BEP20_TOKEN, TOKEN_AMOUNT } = process.env;
    const verifier = await Verifier.deployed();
    const hasherInstance = await hasherContract.deployed();
    await BEP20GhostRoute.link(hasherContract, hasherInstance.address);
    let token = BEP20_TOKEN;
    if (token === "") {
      const tokenInstance = await deployer.deploy(BEP20Mock);
      token = tokenInstance.address;
    }
    const ghostRoute = await deployer.deploy(
      BEP20GhostRoute,
      verifier.address,
      TOKEN_AMOUNT,
      MERKLE_TREE_HEIGHT,
      accounts[0],
      token
    );
    console.log("BEP20GhostRoute's address ", ghostRoute.address);
  });
};

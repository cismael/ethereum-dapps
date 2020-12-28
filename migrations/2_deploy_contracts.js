const WheezyToken = artifacts.require("./WheezyToken.sol");

const web3 = require("web3-utils");

module.exports = (deployer, network, [owner]) => {
    return deployer
        .then(() => deployer.deploy(WheezyToken))
        .then(() => WheezyToken.deployed())
};
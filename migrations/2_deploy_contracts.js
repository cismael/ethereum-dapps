const WheezyToken = artifacts.require("./contracts/WheezyToken.sol");
const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function (deployer, network, [owner]) {
    deployer.deploy(WheezyToken);
    deployer.deploy(SimpleStorage);
    deployer.deploy(ComplexStorage);
};
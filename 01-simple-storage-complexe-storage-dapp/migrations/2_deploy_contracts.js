const SimpleStorage = artifacts.require("./contracts/SimpleStorage.sol");
const ComplexStorage = artifacts.require("./contracts/ComplexStorage.sol");

module.exports = function (deployer, network, accounts) {
    if (network !== "eth") {
        console.log("WAZAAAAAAAAAAAAAA => this is a testnet")
        // Deployment logic for testnets
        deployer.deploy(SimpleStorage);
        deployer.deploy(ComplexStorage);
    } else {
        console.log(network, " : this is a Mainnet ===> No deployment for now ^^");
        // Deployment logic for mainnets
    }
};

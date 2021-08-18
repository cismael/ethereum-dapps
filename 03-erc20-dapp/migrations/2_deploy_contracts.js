const WheezyToken = artifacts.require("./contracts/WheezyToken.sol");

module.exports = function (deployer, network, accounts) {
    if (network !== "eth" && network !== "bsc" && network !== "polygon" && network !== "optimism" && network !== "kcc" && network !== "heco") {
        console.log("WAZAAAAAAAAAAAAAA => this is a testnet")
        // Deployment logic for testnets
        deployer.deploy(WheezyToken);
    } else {
        console.log(network, " : this is a Mainnet ===> No deployment for now ^^");
        // Deployment logic for mainnets
    }
};
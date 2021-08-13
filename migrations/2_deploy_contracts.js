const WheezyToken = artifacts.require("./contracts/WheezyToken.sol");
const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");
const NFT = artifacts.require("Nft");

module.exports = async function (deployer, network, accounts) {
    if (network !== "eth" && network !== "bsc" && network !== "polygon" && network !== "optimism" && network !== "kcc" && network !== "heco") {
        console.log("WAZAAAAAAAAAAAAAA => we are on a testnet")
        // Deployment logic for testnets
        deployer.deploy(WheezyToken);
        deployer.deploy(SimpleStorage);
        deployer.deploy(ComplexStorage);

        await deployer.deploy(NFT);
        const nft = await NFT.deployed();
        await nft.mint(accounts[0]);
    } else {
        console.log(network, " : this is a Mainnet ===> No deployment for now ^^");
        // Deployment logic for mainnets
    }
};
const NFT = artifacts.require("Nft");

module.exports = async function (deployer, network, accounts) {
    if (network !== "eth" && network !== "bsc" && network !== "polygon" && network !== "optimism" && network !== "kcc" && network !== "heco") {
        console.log("WAZAAAAAAAAAAAAAA => this is a testnet")
        // Deployment logic for testnets
        await deployer.deploy(NFT);
        const nft = await NFT.deployed();
        await nft.mint(accounts[0]);
    } else {
        console.log(network, " : this is a Mainnet ===> No deployment for now ^^");
        // Deployment logic for mainnets
    }
};
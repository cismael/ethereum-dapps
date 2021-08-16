# To check the length of the contract :

const myContractInstance = await MyContract.new();
console.log(myContractInstance.constructor._json.deployedBytecode.length);
# To check the length of the contract :

const myContractInstance = await MyContract.new();
console.log(myContractInstance.constructor._json.deployedBytecode.length);

When you deploy a contract, gas is consumed for 3 different phases of the deployment:

Intrinsic gas: This is the baseline amount used in any transaction. For all transactions, there is an initial cost of 21,000 gas. For contract creation, there is an additional 32,000. Therefore, before anything is actually done for deployment, you're already in for 53,000 gas.
Constructor execution: This is the gas used for the OPCODES executed by your constructor. I deployed this contract on Rinkeby and you can see all of the OPCODES for constructor execution, and their costs, here. This portion consumed 81,040 in gas.
Contract code storage: Finally, you have the cost of storing your contract code. If you look at gas estimation tools, this is referred to as the "code deposit". This costs 200 gas for every byte of runtime contract code stored. To get the size of your contract code, run solc --optimize Voting.sol --bin-runtime -o . and look at the size of the resulting file. Your contract is 1116 bytes (I'm using solc version 0.4.19, so your size on .18 may be slightly different), which results in 223,200 gas consumed.
In total, this comes out to 357,240 gas, so your 290,000 limit is too low (The actual contract run on Rinkeby consumed 351,640 gas. Again, I believe the small discrepancy is due to slight differences in compiler version output. I'm not 100% sure of this, but the difference is small enough - effectively 28 bytes of contract code - that I didn't dig deeper to find the underlying reason).

https://hackernoon.com/costs-of-a-real-world-ethereum-contract-2033511b3214

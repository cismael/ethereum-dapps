# wheezy-erc-20-token
Trying solidity to create an ERC-20 token.


## Install truffle globally

`npm install truffle -g`

## Init truffle project

Create a folder for your project, go inside this folder et execute the command bellow.

`truffle init`

## Install openzeppelin

Inside your folder, excute the command bellow.

`npm install @openzeppelin/contracts`

## Local Testing

### Deployment

To test the token in local, you have to use the command line after :

`truffle develop`

And then execute this command in the prompt :

truffle(develop)> `migrate`

### Testing

To test that everything is good use these command lines in order :

```
truffle(develop)> token = await WheezyToken.deployed()

=> result : 
undefined
```

```
truffle(develop)> token.balanceOf("0xaDB0C6caD08a58A3A2A754Ced0d7AbEF8891Cc7c")

=> result : 
BN {
  negative: 0,
  words: [ 1000000, <1 empty item> ],
  length: 1,
  red: null
}
```
`0xaDB0C6caD08a58A3A2A754Ced0d7AbEF8891Cc7c` is the account address after the `migrate` command.


```
truffle(develop)> token.name()

=> result : 
'WheezyToken'
```

```
truffle(develop)> token.symbol()

=> result : 
'WHZ'
```

## Public Etheureum Blockain Testing (Ropsten testnet)

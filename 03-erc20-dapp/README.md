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


### Caractéristiques du token ERC-20

#### Les fonctions :
totalSupply() public view returns (uint256 totalSupply)

balanceOf(address _owner) public view returns (uint256 balance)

transfer(address _to, uint256 _value) public returns (bool success)

transferFrom(address _from, address _to, uint256 _value) public returns (bool success)

approve(address _spender, uint256 _value) public returns (bool success)

allowance(address _owner, address _spender) public view returns (uint256 remaining)


#### Les événements :
Transfer(address indexed _from, address indexed _to, uint256 _value)

Approval(address indexed _owner, address indexed _spender, uint256 _value)


Tout d’abord nous avons des fonctions qui nous permettent d’obtenir des informations, BalanceOf et totalSupply.
Respectivement elles nous informent du nombre de tokens détenus par une addresse, et le nombre total de tokens en circulation.
Puis viennent celles qui vous permettent de réaliser des transactions, transfer et transferFrom.
Enfin les deux dernières fonctions vont permettre d’autoriser une adresse à retirer des fonds jusqu'au maximum autorisé, et de connaître ce maximum en question.
Pour les événements, c’est plutôt simple puisque qu'ils vont automatiquement être appelés lors de la réalisation d’un transfert ou d’une autorisation de retrait.


#### Dev

function testBurn() public {
    mytoken.burn(1000);
    uint balance = mytoken.balanceOf(msg.sender);
    uint expected = 100000000000000000 - 1000;
    Assert.equal(balance, expected, "Balance should be reduced.");
}


npx create-react-app my-app
cd my-app
npm start
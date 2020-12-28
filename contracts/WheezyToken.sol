pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other `ERC20` functions.
 */
contract WheezyToken is ERC20, Ownable {

    string constant TOKEN_NAME = "WheezyToken";
    string constant TOKEN_SYMBOL = "WHZ";
    uint constant TOKEN_INITIAL_SUPPLY  = 1000000 * 10 ** uint256(0);

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor() ERC20(TOKEN_NAME, TOKEN_SYMBOL) public {
        _mint(msg.sender, TOKEN_INITIAL_SUPPLY);
    }

}
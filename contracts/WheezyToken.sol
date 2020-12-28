pragma solidity >=0.4.22 <0.9.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract WheezyToken is ERC20, ERC20Detailed, Ownable {

    constructor() ERC20Detailed("WheezyToken", "WHZ", 0) public {
        _mint(msg.sender, 1000000 * 10 ** uint256(0));
    }

}
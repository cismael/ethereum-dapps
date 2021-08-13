// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {

    string public constant NFT_NAME = "My NFT";
    string public constant NFT_SYMBOL = "NFT";

    address public admin;
    uint public nextTokenId;

    /**
     * @dev Constructor that sets msg.sender as admin
     */
    constructor() ERC721(NFT_NAME, NFT_SYMBOL) {
        admin = msg.sender;
    }

    function mint(address to) external {
        require(msg.sender == admin, 'only admin');
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal view override returns (string memory) {
        return '';
    }
}
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "../contracts/WheezyToken.sol";

contract WheezyTokenTest {

    WheezyToken wheezyToken;

    constructor() {
        wheezyToken  = new WheezyToken();
    }

    function testTotalSupply() public {
        uint returned = wheezyToken.totalSupply();
        uint expected = 1000000000000000000000000;

        Assert.equal(returned, expected, "Total Supply should be 1000000.");
    }

    function testTransferFrom() public  {
        address _to = 0x89EAB984AbB3E7Cc0f847dc321fCD9B95a538f05;

        bool result = wheezyToken.transfer(_to, 1);

        Assert.isTrue(result, "Transfer should succeed.");
    }

}
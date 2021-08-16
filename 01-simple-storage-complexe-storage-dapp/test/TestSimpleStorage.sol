// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

    function testGetData() public {
        SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

        string memory expected = "My default stored value in the blockchain";

        Assert.equal(simpleStorage.getData(), expected, "It should return : 'My default stored value in the blockchain'");
    }

    function testSetAndGetData() public {
        SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

        string memory expected = "New value to store";
        simpleStorage.setData(expected);

        Assert.equal(simpleStorage.data(), expected, "It should store the value 89.");
    }

}
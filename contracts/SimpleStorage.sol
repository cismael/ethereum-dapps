// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {

  string public data = "My default stored value in the blockchain";

  event SimpleStorageSet(string _message);

  // Not really necessary because "data" is "public" so solidity will create a "geter" automatically
  function getData() view external returns(string memory) {
    return data;
  }

  function setData(string calldata _data) external {
    data = _data;

    emit SimpleStorageSet("Data stored successfully!");
  }

}
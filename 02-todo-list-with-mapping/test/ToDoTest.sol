// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "../contracts/ToDo.sol";

contract ToDoTest {

    ToDo toDo;

    constructor() {
        toDo  = new ToDo();
    }

    function createTask() public {
        bytes32 contentExpected = "contentExpected";
        bytes32 authorExpected = "authorExpected";

        toDo.createTask(contentExpected, authorExpected);

//        Task result = toDo.getTasks()[0];

//        Assert.equal(toDo.tasksArray()[1], contentExpected, "Total Supply should be 1000000.");
//        Assert.equal(toDo.tasksArray()[1], authorExpected, "Total Supply should be 1000000.");
    }
}
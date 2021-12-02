// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ToDo {
  struct Task {
    uint id;
    uint date;
    uint dateComplete;
    bytes content;
    bytes author;
    bool done;
  }

  uint lastTaskId;
  Task[] tasks;

  event TaskCreated(uint id, uint date, string content, string author, bool done);
  event TaskStatusToggled(uint id, uint dateComplete, bool done);

  constructor() {
    lastTaskId = 0;
  }

  function createTask(string memory content, string memory author) public {
    bytes memory tempContent = bytes(content);
    bytes memory tempAuthor = bytes(author);

    require(tempContent.length > 0, "Content can't be empty");
    require(tempAuthor.length > 0, "Author can't be empty");

    lastTaskId++;
    Task memory task = Task(lastTaskId, block.timestamp, 0, tempContent, tempAuthor, false);
    tasks.push(task);

    emit TaskCreated(lastTaskId, block.timestamp, content, author, false);
  }

  function getTasks() public view returns(Task[] memory) {
    return tasks;
  }

//  function toggleDone(uint _id) taskExists(_id) public {
//    Task memory task = tasks[_id];
//    task.done = !task.done;
//    task.dateComplete = task.done ? block.timestamp : 0;
//
//    emit TaskStatusToggled(_id, task.done, task.dateComplete);
//  }

  modifier taskExists(uint _id) {
    if(tasks[_id].id == 0) {
      revert();
    }
    _;
  }

}
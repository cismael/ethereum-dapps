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
  uint[] taskIds;
  Task[] tasksArray;
  mapping(uint => Task) public tasks;  

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
    tasks[lastTaskId] = Task(lastTaskId, block.timestamp, 0, tempContent, tempAuthor, false);
    taskIds.push(lastTaskId);

    emit TaskCreated(lastTaskId, block.timestamp, content, author, false);
  }

  function createTaskV2(string memory content, string memory author) public {
    bytes memory tempContent = bytes(content);
    bytes memory tempAuthor = bytes(author);
    require(tempContent.length > 0, "Content can't be empty");
    require(tempAuthor.length > 0, "Author can't be empty");
    lastTaskId++;
    tasksArray.push(Task(lastTaskId, block.timestamp, 0, tempContent, tempAuthor, false));

    emit TaskCreated(lastTaskId, block.timestamp, content, author, false);
  }

  function getTaskIds() public view returns(uint[] memory) {
    return taskIds;
  }

//  /**
//   * Fixture method for frontend app testing purpose only
//   */
//  function getTaskFixtures() public view returns(uint, uint, string memory, string memory, bool) {
//    return (0, block.timestamp, "My content", "ico", false);
//  }

  function getTask(uint _id) public view returns(uint, uint, uint, bytes memory, bytes memory, bool) {
    return (_id, tasks[_id].date, tasks[_id].dateComplete, tasks[_id].content, tasks[_id].author, tasks[_id].done);
  }

  function getTaskV2(uint _id) public view returns(uint, uint, uint, bytes memory, bytes memory, bool) {
    return (_id, tasksArray[_id].date, tasksArray[_id].dateComplete, tasksArray[_id].content, tasksArray[_id].author, tasksArray[_id].done);
  }

  function getTasksV2() public view returns(Task[] memory) {
    return tasksArray;
  }

//  function getTasks() public view returns (address[] memory){
//    address[] memory ret = new address[](lastTaskId);
//    for (uint i = 0; i < lastTaskId; i++) {
//        ret[i] = tasks[i];
//    }
//    return ret;
//  }

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
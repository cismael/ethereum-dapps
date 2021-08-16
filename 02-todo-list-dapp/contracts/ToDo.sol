// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ToDo {
  struct Task {
    uint id;
    uint date;
    string content;
    string author;
    uint dateComplete;
    bool done;
  }

  uint lastTaskId;
  uint[] taskIds;
  mapping(uint => Task) tasks;
  Task[] tasksArray;
  mapping(uint => Task) tasks;

  event TaskCreated(uint id, uint date, string content, string author, bool done);
  event TaskStatusToggled(uint id, bool done, uint dateComplete);

  constructor() public {
    lastTaskId = 0;
    tasks[lastTaskId] = Task(lastTaskId, block.timestamp, "My content 1", "ico 1", block.timestamp, false);
    taskIds.push(lastTaskId);
    lastTaskId++;
    tasks[lastTaskId] = Task(lastTaskId, block.timestamp, "My content 2", "ico 2", block.timestamp, false);
    taskIds.push(lastTaskId);
    lastTaskId++;
    tasks[lastTaskId] = Task(lastTaskId, block.timestamp, "My content 3", "ico 3", block.timestamp, false);
    taskIds.push(lastTaskId);
    lastTaskId++;
  }

  function createTask(string memory content, string memory author) public {
    lastTaskId++;
    tasks[lastTaskId] = Task(lastTaskId, block.timestamp, content, author, 0, false);
    taskIds.push(lastTaskId);

    emit TaskCreated(lastTaskId, block.timestamp, content, author, false);
  }

  function getTaskIds() public view returns(uint[] memory) {
    return taskIds;
  }

  /**
   * Fixture method for frontend app testing purpose only
   */
  function getTaskFixtures() public view returns(uint, uint, string memory, string memory, bool) {
    return (0, block.timestamp, "My content", "ico", false);
  }
  

  function getTask(uint _id) taskExists(_id) public view returns(uint, uint, string memory, string memory, bool, uint) {
    return (_id, tasks[_id].date, tasks[_id].content, tasks[_id].author, tasks[_id].done, tasks[_id].dateComplete);
  }

  function getTasks() public view returns(tasksArray[] memory) {
    return tasksArray;
  }

  function toggleDone(uint _id) taskExists(_id) public {
    Task memory task = tasks[_id];
    task.done = !task.done;
    task.dateComplete = task.done ? block.timestamp : 0;

    emit TaskStatusToggled(_id, task.done, task.dateComplete);
  }

  modifier taskExists(uint _id) {
    if(tasks[_id].id == 0) {
      revert();
    }
    _;
  }

}
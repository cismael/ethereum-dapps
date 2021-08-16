const { accounts, contract } = require('@openzeppelin/test-environment');
const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const ToDo = contract.fromArtifact('ToDo'); // Loads a compiled contract

describe('ToDo', () => {

  it("...should add a new todo in the todo list'.", async () => {
    const toDoInstance = await ToDo.new();

    // Arrange
    const contentExpected = "contentExpected";
    const authorExpected = "authorExpected";

    // Test
    await toDoInstance.createTask(contentExpected, authorExpected, { from: accounts[0] });

    // Get stored value(s)
//    const tasksArray = await toDoInstance.tasksArray.call();
    const {id, date, dateComplete, content, author, done} = await toDoInstance.getTask(0, { from: accounts[0] });
    console.log("content ===> ", content);

    // Assert
    // assert.equal(tasksArray[1], contentExpected, "The value 'contentExpected' was stored.");
    expect(content).to.be.an('array').to.be.equal(contentExpected);
  });

});
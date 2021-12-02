const { accounts, contract } = require('@openzeppelin/test-environment');
const [ admin, deployer, user ] = accounts; // Use the different accounts, which are unlocked and funded with Ether
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
    await toDoInstance.createTask(contentExpected, authorExpected);

    // Get stored value(s)
    let result = await toDoInstance.getTasks.call();
    result = result[0]; // just need the first element of the array because the array only have 1 element inside

    // Asserts & Expects
    assert.equal(contentExpected, web3.utils.hexToAscii(result.content), "The value 'contentExpected' was stored.");
    assert.equal(authorExpected, web3.utils.hexToAscii(result.author), "The value 'authorExpected' was stored.");

    expect(result).to.be.an('array');
    expect(result).to.have.deep.property('content', web3.utils.asciiToHex(contentExpected));
    expect(result).to.have.deep.property('author', web3.utils.asciiToHex(authorExpected));
  });

});
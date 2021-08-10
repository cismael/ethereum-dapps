const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", accounts => {

  it("...should store the value 'New value to store'.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    const expected = "New value to store";

    // Set value of expected
    await simpleStorageInstance.setData(expected, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.data.call();

    assert.equal(storedData, expected, "The value 'New value to store' was stored.");
  });

});
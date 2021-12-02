import Web3 from "web3";

// Function that convert bytes to an human readable string
const formatBytesToString = (bytes) => {
  return Web3.utils.toAscii(bytes);
};

export default formatBytesToString;
import Web3 from "web3";

// Import contract artifacts
import SimpleStorage from './contracts/SimpleStorage.json';
import ComplexStorage from "./contracts/ComplexStorage.json";

const options = {
    contracts: [SimpleStorage, ComplexStorage],
    events: {
        SimpleStorage: ["SimpleStorageSet"],
    },
    web3: {
        // block: false,
        // customProvider: new Web3("ws://localhost:8545"),
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:9545",
        },
    },
};

export default options;
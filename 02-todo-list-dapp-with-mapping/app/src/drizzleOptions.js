import Web3 from "web3";

// Import contract artifacts
import ToDo from './_contracts/ToDo.json';

const options = {
    contracts: [ToDo],
    events: {
        ToDo: ["TaskCreated", "TaskStatusToggled"],
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
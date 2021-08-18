import Web3 from "web3";

// Import contract artifacts
import WheezyToken from "./_contracts/WheezyToken.json";

const options = {
    contracts: [WheezyToken],
    events: {
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
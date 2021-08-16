import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

// Import display functions
import getActiveAccountDisplay from "./utils/getActiveAccountDisplay";
import getCreateTasksDisplay from "./utils/createTasksDisplay";
import getTasksDisplay from "./utils/getTasksDisplay";

const { AccountData, ContractData, ContractForm } = newContextComponents;

class MyComponent extends React.PureComponent {

    render() {
        // console.log("props ===> ", this.props);
        const {drizzle, drizzleState} = this.props;
        const { accounts } = drizzleState;

        return (
            <>
                <div className="App">
                    <div className="section">
                        <AccountData drizzle={drizzle} drizzleState={drizzleState}
                             accountIndex={0}
                             units="ether"
                             precision={3}
                             render={({ address, balance, units }) => (
                                <>
                                    {getActiveAccountDisplay({ address, balance, units })}
                                </>
                             )}
                        />
                    </div>

                    <hr/>

                    <div className="section card">
                        {/* Create Task */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="orange">Create Task</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* Call the setData() method in the Smart Contract */}
                            {/* ContractForm is for functions in the smart contract that need to change data on the blockchain */}
                            <ContractForm drizzle={drizzle} contract="ToDo"
                                method="createTask"
                                labels={['new task to do', 'author of the task']}
//                                methodArgs={[{ from: accounts[0], gas: 6721975, gasPrice: 20000000000 }]}
                                methodArgs={[{ from: accounts[0], gas: 6721975, gasPrice: 5000000000}]}
                                render={({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => (
                                    <>
                                        {getCreateTasksDisplay({inputs, inputTypes, state, handleInputChange, handleSubmit})}
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    <hr/>

                    <div className="section card">
                        <ContractData drizzle={drizzle} drizzleState={drizzleState}
                            contract="ToDo"
                            method="getTasks"
                            render={(tasks) => (
                                <>
                                    {getTasksDisplay({tasks})}
                                </>
                            )}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default MyComponent;
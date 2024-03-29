import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

class MyComponent extends React.PureComponent {
    state = { dataKey: null };

    // Not really needed
    componentDidMount() {
        const { drizzle } = this.props;
        let dataKey = drizzle.contracts.SimpleStorage.methods["getData"].cacheCall(); // declare this call to be cached and synchronized
        this.setState({ dataKey });
    }

    render() {
        // console.log("props ===> ", this.props);
        const { SimpleStorage } = this.props.drizzleState.contracts;
        const displayData = SimpleStorage.getData[this.state.dataKey]; // if displayData (an object) exists, then we can display the value below

        const {drizzle, drizzleState} = this.props;
        return (
            <>
                <div className="App">
                    <div className="section">
                        <h2>Active Account</h2>
                        <AccountData drizzle={drizzle} drizzleState={drizzleState}
                                     accountIndex={0}
                                     units="ether"
                                     precision={3}
                        />
                    </div>

                    <div className="section">
                        <h2>===> SimpleStorage Contract</h2>
                        <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
                        <p>
                            <strong>Stored Value: </strong>
                            {/*Call the getData() method in the Smart Contract (the best way)*/}
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                          contract="SimpleStorage"
                                          method="getData"
                            />
                        </p>
                        {/*Call the setData() method in the Smart Contract*/}
                        {/* ContractForm is for functions in the smart contract that need to change data on the blockchain */}
                        <ContractForm drizzle={drizzle} contract="SimpleStorage" method="setData" labels={['new value of `data`']}/>
                    </div>

                    <div className="section">
                        <h2>===> WheezyToken Contract</h2>
                        <p>
                            Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator.
                            We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.
                        </p>
                        <p>
                            <strong>Total Supply: </strong>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                          contract="WheezyToken"
                                          method="totalSupply" methodArgs={[{ from: drizzleState.accounts[0] }]}
                            />{" "}
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                          contract="WheezyToken"
                                          method="symbol"
                                          hideIndicator
                            />
                        </p>
                        <p>
                            <strong>My Balance: </strong>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                          contract="WheezyToken"
                                          method="balanceOf"
                                          methodArgs={[drizzleState.accounts[0]]}
                            />
                        </p>
                        <h3>Send Tokens</h3>
                        <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="transfer"
                                      labels={["To Address", "Amount to Send"]}
                        />
                    </div>

                    <div className="section">
                        <h2>===> ComplexStorage Contract</h2>
                        <p>
                            Finally this contract shows data types with additional considerations.
                            Note in the code the strings below are converted from bytes to UTF-8
                            strings and the device data struct is iterated as a list.
                        </p>
                        <p>
                            <strong>String 1: </strong>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                          contract="ComplexStorage"
                                          method="string1"
                                          toUtf8
                            />
                        </p>
                        <p>
                            <strong>String 2: </strong>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                          contract="ComplexStorage"
                                          method="string2"
                                          toUtf8
                            />
                        </p>
                        <strong>Single Device Data: </strong>
                        <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="ComplexStorage"
                                      method="singleDD"
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default MyComponent;
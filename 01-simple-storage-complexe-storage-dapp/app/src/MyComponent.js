import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

class MyComponent extends React.PureComponent {

    render() {
        // console.log("props ===> ", this.props);
        const {drizzle, drizzleState} = this.props;

        return (
            <>
                <div className="App">
                    <div className="section">
                        <AccountData drizzle={drizzle} drizzleState={drizzleState}
                             accountIndex={0}
                             units="ether"
                             precision={3}
                             render={(result) => (
                                 <>
                                    <div>
                                        <span>Active Account : <strong>{result.address}</strong></span>
                                    </div>
                                    <div>
                                        <span>Balance : <strong>{result.balance} {result.units}</strong></span>
                                    </div>
                                 </>
                             )}
                        />
                    </div>

                    <hr/>

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

                    <hr/>

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
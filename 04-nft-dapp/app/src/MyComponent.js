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
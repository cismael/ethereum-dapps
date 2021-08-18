import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

// Import display functions
import getActiveAccountDisplay from "./components/GetActiveAccountDisplay";
import DisplayAccountBalance from "./components/DisplayAccountBalance";

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

                    <div className="section">
                        <p>
                            <strong>Total Supply: </strong>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                contract="WheezyToken"
                                method="totalSupply" 
                                methodArgs={[{ from: accounts[0] }]}
                                hideIndicator
                            />
                            {" "}
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                contract="WheezyToken"
                                method="symbol"
                                hideIndicator
                            />
                        </p>
                        <p>
                            <strong>Active Account Balance: </strong>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                contract="WheezyToken"
                                method="balanceOf"
                                methodArgs={[accounts[0]]}
                            />
                        </p>
                        <h3>Send Tokens</h3>
                        <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                            contract="WheezyToken"
                            method="transfer"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>

                    <hr/>
                    
                    <DisplayAccountBalance drizzle={drizzle} drizzleState={drizzleState} />           
                </div>
            </>
        )
    }
}

export default MyComponent;
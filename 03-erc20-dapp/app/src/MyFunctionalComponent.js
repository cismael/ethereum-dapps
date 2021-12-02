import React from "react";

import {newContextComponents} from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
    return (
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
                <h2>===> WheezyToken Contract</h2>
                <p>
                    Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator.
                    We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.
                </p>
                <p>
                    <strong>Total Supply: </strong>
                    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                        contract="WheezyToken"
                        method="totalSupply" 
                        methodArgs={[{ from: drizzleState.accounts[0] }]}
                    />
                    {" "}
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
        </div>
    );
};
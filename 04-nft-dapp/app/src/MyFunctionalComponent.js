import React from "react";

import {newContextComponents} from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
    // destructure drizzle and drizzleState from props
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
        </div>
    );
};
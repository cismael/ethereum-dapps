import React from 'react';

import {drizzleReactHooks} from '@drizzle/react-plugin';
import {AccountData, ContractData, ContractForm} from '@drizzle/react-components';

import logo from './logo.svg';

export default ({account}) => (
    <div className="App">
        <div>
            <img src={logo} alt="logo"/>
            <h1>Drizzle Examples</h1>
            <p>Example of how to get started with Drizzle in various situations.</p>
        </div>

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
            <h2>Simple Storage</h2>
            <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
            <p>
                <strong>Stored value: </strong>
                <ContractData contract="SimpleStorage" method="getData" toUtf8 toAscii/>
            </p>
            <ContractForm contract="SimpleStorage" method="setData" labels={['new value of `data`']}/>
        </div>
    </div>
);
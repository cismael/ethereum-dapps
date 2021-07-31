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
            <h2>Active Account</h2>
            <AccountData accountIndex={0} units="ether" precision={3}/>
        </div>

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
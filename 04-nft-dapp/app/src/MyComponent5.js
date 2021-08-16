import React from 'react';

import {drizzleReactHooks} from '@drizzle/react-plugin';
import {newContextComponents} from '@drizzle/react-components';

import logo from './logo.svg';

const {AccountData, ContractData, ContractForm} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

export default () => {
    const {drizzle} = useDrizzle();
    const state = useDrizzleState(state => state);
    return(
        <div className="App">
            <di>
                <img src={logo} alt="logo"/>
                <h1>Drizzle Examples</h1>
                <p>Example of how to get started with Drizzle in various situations.</p>
            </di>

            <AccountData drizzle={drizzle} drizzleState={state} accounts={state.accounts} accountIndex={1} units="ether" precision={3}/>
            <ContractData drizzle={drizzle} drizzleState={state} contract="SimpleStorage" method="getData" toUtf8 toAscii/>
            <ContractForm drizzle={drizzle} drizzleState={state} contract="SimpleStorage" method="setData" labels={['new value of `data`']}/>
        </div>
    );
};
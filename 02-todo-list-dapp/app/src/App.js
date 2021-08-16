import React from "react";
import { Jumbotron } from 'react-bootstrap';

// Import drizzle
import {Drizzle, generateStore} from '@drizzle/store';
import {DrizzleContext} from '@drizzle/react-plugin';

// Import my components
import MyComponent from "./MyComponent";

// Import drizzle options
import drizzleOptions from './drizzleOptions';

// Import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import image
import logo from "./logo.svg";

// Setup the drizzle instance
const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

function App() {
  return (
    // Pass the drizzle instance into the provider and wrap it around the app
    <DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const {drizzle, drizzleState, initialized} = drizzleContext;

                if (!initialized || drizzleState.web3.status === 'failed') {
                    return (
                      <Jumbotron className="loading-jumbo">
                        <div className="loading-text">
                          <div>Connect Metamask to start the app</div>
                          <div>This app works on the Ropsten Testnet</div>
                        </div>
                      </Jumbotron>
                    )
                  }

                return (
                    <>
                        <div className="App">
                            <div>
                                <img src={logo} alt="logo" width="175"/>
                                <h1>ToDo List Dapp</h1>
                            </div>

                            <hr/>

                            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
                        </div>
                    </>
                )
            }}
        </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
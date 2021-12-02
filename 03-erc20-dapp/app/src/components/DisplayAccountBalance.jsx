import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

import { Table } from 'react-bootstrap';

const { ContractData } = newContextComponents;

// Function that displays todos in the blockchain (inside the smart contract)
class DisplayAccountBalance extends React.PureComponent {

  render() {
    const { drizzle, drizzleState } = this.props;
    const { accounts } = drizzleState;

    return (
      <>
        <div className="section">
          <div className="row">
              <div className="col-sm-12">
                  <h2>9 other available accounts (after active account) and their balances</h2>
              </div>
          </div>

          <div className="row">
              <div className="col-sm-12">
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                          <th>Account</th>
                          <th>Balance</th>
                          </tr>
                      </thead>
                      <tbody id="tasks">
                          <tr key={1}>
                              <td>{accounts[1]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[1]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={2}>
                              <td>{accounts[2]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[2]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={3}>
                              <td>{accounts[3]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[3]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={4}>
                              <td>{accounts[4]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[4]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={5}>
                              <td>{accounts[5]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[5]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={6}>
                              <td>{accounts[6]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[6]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={7}>
                              <td>{accounts[7]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[7]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={8}>
                              <td>{accounts[8]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[8]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                          <tr key={9}>
                              <td>{accounts[9]}</td>
                              <td>
                                  <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                      contract="WheezyToken"
                                      method="balanceOf"
                                      methodArgs={[accounts[9]]}
                                      hideIndicator
                                  />
                              </td>
                          </tr>
                      </tbody>
                  </Table>
              </div>
          </div>
      </div>
      </>
    )
  }
}

export default DisplayAccountBalance;
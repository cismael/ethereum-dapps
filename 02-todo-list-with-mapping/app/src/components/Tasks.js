import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

import getTasksDisplay from "../utils/getTasksDisplay";

import { Table } from 'react-bootstrap';

const { ContractData } = newContextComponents;

//import formatDate from 'formatDate'

class Tasks extends React.PureComponent {    
    render() {
        const {taskIds, drizzle, drizzleState} = this.props;
        const { accounts } = drizzleState;

        const arrayLength = taskIds.length;

        if(arrayLength === 0) {
            return (
                <>
                 <div className="row">
                     <div className="col-sm-12">
                         <h2 className="orange">Tasks</h2>
                     </div>
                 </div>
     
                 <div className="row">              
                     <div className="col-sm-12">
                         <h2>There is no todo yet !</h2>
                     </div>
                 </div>
                </>
            )
        }
        
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="orange">Tasks</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Content</th>
                                <th>Author</th>
                                <th>Done</th>
                                <th>Date Completed</th>
                                </tr>
                            </thead>
                            <tbody id="tasks">
                                { taskIds.map((taskId, index) => (
                                    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                                        contract="ToDo"
                                        method="getTask"
                                        methodArgs={[arrayLength - 1 - index, { from: accounts[0] }]}
                                        render={({ id, date, dateComplete, content, author, done }) => (
                                            <>
                                                {console.log("id =>", id)}
                                                <tr>
                                                    <td>{id}</td>
                                                    <td>{date}</td>
                                                </tr>
                                            </>
                                        )}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </div>
              </div>
            </>
        );
    }
}

export default Tasks;
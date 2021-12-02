import React from 'react';

// Import css
import { Table } from 'react-bootstrap';

// Import components
import ToDo from './ToDo'

class ToDoList extends React.PureComponent {
    
    render() {
        const {todos, drizzle, drizzleState} = this.props;

        if(!todos || todos.length === 0) {
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
                                {
                                    <>
                                        {todos.map((index) => (
                                            <ToDo key={index} index={index} drizzle={drizzle} drizzleState={drizzleState} />
                                        ))}
                                    </>
                                }
                            </tbody>
                        </Table>
                    </div>
              </div>
            </>
        );
    }
}

export default ToDoList;
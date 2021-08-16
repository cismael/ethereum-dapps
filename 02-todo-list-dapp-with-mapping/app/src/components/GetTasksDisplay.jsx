import { Table } from 'react-bootstrap';

import formatDate from '../utils/formatDate';
import formatBytesToString from '../utils/formatBytesToString';

// Function that displays todos in the blockchain (inside the smart contract)
const getTasksDisplay = ({ tasks }) => {
    if(tasks.length === 0) {
      return (
        <>
            <div className="row">
              <div className="col-sm-12">
                  <h2 className="orange">Tasks</h2>
              </div>
            </div>

          <div className="row">
            <div className="col-sm-12"> There is no todo yet !</div>
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
                          { tasks.map((input, index) => (
                              <>
                                <tr key={index}>
                                    <td>{input.id}</td>
                                    <td>{formatDate(input.date)}</td>
                                    <td>{formatBytesToString(input.content)}</td>
                                    <td>{formatBytesToString(input.author)}</td>
                                    <td>{input.done}</td>
                                    <td>{input.dateComplete}</td>
                                </tr>
                              </>
                          ))}
                      </tbody>
                  </Table>
              </div>
          </div>
      </>
  );
};

export default getTasksDisplay;
import { Table } from 'react-bootstrap';

// Function that displays todos in the blockchain (inside the smart contract)
export default ({ tasks }) => {
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
                              <tr key={index}>
                                  <td>{input.id}</td>
                                  <td>{input.date}</td>
                                  <td>{input.content}</td>
                                  <td>{input.author}</td>
                                  <td>{input.done}</td>
                                  <td>{input.dateComplete}</td>
                              </tr>
                          ))}
                      </tbody>
                  </Table>
              </div>
          </div>
      </>
  );
};
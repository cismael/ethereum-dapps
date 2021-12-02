import React, { Fragment } from 'react';

// Function that displays a todo creation form
const createTodo = ({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => {
  return (
      <>
          <form id="new-task" className="col-sm-12" onSubmit={handleSubmit}>
              {inputs.map((theInput, index) => (
                <React.Fragment key={index}>
                    <div className="form-group">
                        <input
                          id="task-content"
                          className="form-control"
                          style={{ fontSize: 18 }}
                          key={index}
                          type={inputTypes[index]}
                          name={theInput.name}
                          value={state[theInput.name]}
                          placeholder={theInput.name}
                          onChange={handleInputChange}
                        />
                    </div>
                </React.Fragment>
              ))}
              <button className="btn btn-primary" key="submit" type="button" onClick={handleSubmit}>Submit</button>
          </form>
      </>
  );
};

export default createTodo;
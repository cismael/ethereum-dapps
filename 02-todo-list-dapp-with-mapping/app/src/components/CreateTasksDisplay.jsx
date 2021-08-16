// Function that displays a todo creation form
const createTasksDisplay = ({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => {
  return (
      <>
          <form id="new-task" className="col-sm-12" onSubmit={handleSubmit}>
              {inputs.map((input, index) => (
              <>
                  <div className="form-group">
                      {/* <label htmlFor="task-content">{input.name}</label> */}
                      <input id="task-content" className="form-control"
                          style={{ fontSize: 30 }}
                          key={input.name}
                          type={inputTypes[index]}
                          name={input.name}
                          value={state[input.name]}
                          placeholder={input.name}
                          onChange={handleInputChange}
                      />
                  </div>
              </>
              ))}
            <button className="btn btn-primary" key="submit" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
      </>
  );
};

export default createTasksDisplay;
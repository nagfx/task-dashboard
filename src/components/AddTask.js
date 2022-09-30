import React from "react";

class AddTask extends React.Component {
  state = {
    taskname: "",
    date: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.taskname === "" || this.state.date === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({ taskname: "", date: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Task</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Task Name</label>
            <input
              type="text"
              name="taskname"
              placeholder="Task's Name"
              value={this.state.taskname}
              onChange={(e) => this.setState({ taskname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Date</label>
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
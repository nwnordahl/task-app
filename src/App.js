import { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
    this.handleInputchange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ task: e.target.value });
  }

  handleInputSubmit(e) {
    e.preventDefault();
    this.setState({ task: "", tasks: [...this.state.tasks, this.state.task] });
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleInputSubmit(e)}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            id="taskInput"
            value={task}
            onChange={(e) => this.handleInputChange(e)}
            onSubmit={this.handleInputSubmit}
          />
          <button type="submit">Add</button>
          <Overview tasks={tasks} />
        </form>
      </div>
    );
  }
}

export default App;

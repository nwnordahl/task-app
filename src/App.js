import { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        name: "",
        id: uniqid(),
      },
      tasks: [],
    };
    this.handleInputchange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ task: { name: e.target.value, id: this.state.task.id } });
  }

  handleInputSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: { name: "", id: uniqid() },
    });
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
            value={task.name}
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

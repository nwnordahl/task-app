import { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;

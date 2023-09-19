import React, { Component } from 'react';
import axios from 'axios';

class UpdateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.task.title,
      description: this.props.task.description,
      dead_line: this.props.task.dead_line,
      status: this.props.task.status,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      title: this.state.title,
      description: this.state.description,
      dead_line: this.state.dead_line,
      status: this.state.status,
    };

    axios
      .put(`http://localhost:8000/update_task/${this.props.task.id}/`, updatedTask)
      .then((response) => {
        console.log('Task updated successfully:', response.data);
        // Очистити форму або перезавантажити дані списку завдань
        this.props.onUpdate();
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Update Task</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Deadline:</label>
            <input
              type="datetime-local" // Для вибору дати та часу
              name="dead_line"
              value={this.state.dead_line}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="N">Not Completed Yet</option>
              <option value="C">Completed</option>
              <option value="F">Fail</option>
              <option value="D">Delayed</option>
            </select>
          </div>
          <button type="submit">Update Task</button>
        </form>
      </div>
    );
  }
}

export default UpdateTask;
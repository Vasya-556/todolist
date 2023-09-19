import React, { Component } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import RemoveTask from './RemoveTask';

class TaskList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    axios
      .get('http://127.0.0.1:8000/') // Ваш URL для отримання списку завдань
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }

  handleTaskUpdate = (updatedTask) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.setState({ tasks: updatedTasks });
  };

  handleTaskRemove = (taskId) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Created: {task.time_create}</p>
              <p>Last Updated: {task.time_update}</p>
              <p>Deadline: {task.dead_line}</p>
              <p>Status: {task.status}</p>
              <UpdateTask task={task} onUpdate={this.handleTaskUpdate} />
              <RemoveTask task={task} onRemove={this.handleTaskRemove} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
import React, { Component } from 'react';
import axios from 'axios';

class AddTask extends Component {
  state = {
    title: '',
    description: '',
    dead_line: '', 
    status: 'N',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newTest = {
      title: this.state.title,
      description: this.state.description,
      dead_line: this.state.dead_line,
      status: this.state.status,
    };

    axios
      .post('http://127.0.0.1:8000/create_task/', JSON.stringify(newTest), {
        headers: {
          'Content-Type': 'application/json',
        },
      }) 
      .then((response) => {
        console.log('Task added successfully:', response.data);
        this.setState({
          title: '',
          description: '',
          dead_line: '',
          status: 'N', 
        });
      })
      .catch((error) => {
        console.error('Error adding test:', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Add New Task</h2>
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
          <button type="submit">Add Test</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
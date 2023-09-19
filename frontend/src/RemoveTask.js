import React, { Component } from 'react';
import axios from 'axios';

class RemoveTask extends Component {
  handleRemove = () => {
    axios
      .delete(`http://localhost:8000/remove_task/${this.props.task.id}/`)
      .then((response) => {
        console.log('Task removed successfully:', response.data);
        // Викликати зовнішню функцію для оновлення списку завдань після видалення
        this.props.onRemove(this.props.task.id);
      })
      .catch((error) => {
        console.error('Error removing task:', error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default RemoveTask;
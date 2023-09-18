import './App.css';
import axios from 'axios';
import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component{
  state = { details: [], }

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        <AddTask></AddTask>
        <TaskList></TaskList>
      </div>
    )
  }
}

export default App;

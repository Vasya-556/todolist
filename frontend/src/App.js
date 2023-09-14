import './App.css';
import axios from 'axios';
import React from 'react';

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
        <header>Data from Django</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.title}</h2>
              <p>{output.description}</p>
              <p>{output.time_create}</p>
              <p>{output.time_update}</p>
              <p>{output.dead_line}</p>
              <p>{output.status}</p>
            </div>
          </div>
        ))}  
      </div>
    )
  }
}

export default App;

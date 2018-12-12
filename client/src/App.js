import React, { Component } from 'react';
import './App.css';
import Newuser from './components/NewUser';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      user : {
        name : '',
        password : ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state.user;
    axios.post('http://localhost:3001/users', user);  
  }
  
  handleChange(e){
    const field = e.target.id;
    const input = e.target.value
    this.setState({
      user : {
        ...this.state.user, [field] : input 
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Newuser
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

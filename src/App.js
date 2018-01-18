import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import './UserInput/UserInput.css';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

class App extends Component {

  state = {
    username: "Bob the Man"
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: 'lightgrey',
    }
    return (
      <div className="App">
        <UserInput style={style} defaultname={this.state.username} change={this.usernameChangeHandler} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;

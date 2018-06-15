import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      seconds: 0, //localStorage['seconds'] ? localStorage['seconds'] : 0
      user: props.username
    }
  }

  login = () => {
    this.setState({ user: 'admin' })
  }


  render() {
    return (
      <div className="App">
        <p className="App-intro">
          You have been here for { this.state.seconds } seconds!
        </p>
        <p> Hello, { this.state.user }</p>
        <button onClick={ this.login }>Log In</button>
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({seconds: this.state.seconds + 1})
      if (this.state.seconds === 10) alert("What are you doing here? Get back to work!")
    }, 1000)
  }
}

export default App;

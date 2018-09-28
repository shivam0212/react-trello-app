import React, { Component } from 'react';
//import Button from './components/canvas';
import ToDoList from './components/todolist';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-bootstrap';
import Canvas from './Trello App/canvas';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Mobile Store</h1>
        </header>
        <br />
        <MuiThemeProvider>
          <Canvas />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;


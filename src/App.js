import React, {Component} from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px'}}>
        <Date/>
        <br/>
        <TaskList/>
        <br/>
        <AddButton/>
      </div>);
  }
}

export default App;

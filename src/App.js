import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import TaskList from './TaskList.js';
import Date from './Date.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          time: "12",
          period: "AM",
          activity_title: "Finish Tutorial Series",
          activity_description: "#ReactForNewbies"
        },
        {
          time: "9",
          period: "AM",
          activity_title: "Meeting with Team Leads",
          activity_description: "New Project Kickoff"
        },
        {
          time: "11",
          period: "AM",
          activity_title: "Call Mom",
          activity_description: "Return her call before she kills me"
        },
        {
          time: "3",
          period: "PM",
          activity_title: "Fix Wifey's website",
          activity_description: "FB Ads Integration not working"
        },
        {
          time: "6",
          period: "PM",
          activity_title: "Do DB Backups",
          activity_description: "Related to upcoming server migration"
        }
      ]
    };
  }
  addTask() {
    var task = {
      time: "6",
      period: "AM",
      activity_title: "Jogging",
      activity_description: "Go for a run!"
    };
    var tasks = this.state.tasks.concat(task);
    this.setState({ tasks: tasks });
  }
  checkTask(){

  }
  render() {
    return <div style={{ padding: "30px" }}>
        <Row>
          <Col xs={11}>
            <Date />
          </Col>
          <Col xs={1}>
            <AddButton onClick={this.addTask.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TaskList tasks={this.state.tasks} />
          </Col>
        </Row>
      </div>;
  }
}

export default App;

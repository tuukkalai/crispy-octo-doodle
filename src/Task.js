import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
  handleClick(){
    this.props.onClick();
  }
  render() {
    return <div>
        <Row>
          <Col xs={1}>
            <div>
              <p style={{ textAlign: "center", fontWeight: "bold", paddingTop: "10px" }}>
                {this.props.time}
                <br />
                <span>{this.props.period}</span>
              </p>
            </div>
          </Col>
          <Col xs={10}>
            <h4 id="activity-title">{this.props.activity_title}</h4>
            <p>{this.props.activity_description}</p>
          </Col>
          <Col xs={1} style={{ marginBottom: "10px" }}>
            <Button bsStyle="success" bsSize="large" onClick={this.handleClick.bind(this)}>
              <FontAwesome name="check" />
            </Button>
          </Col>
        </Row>
      </div>;
  }
}

export default Task;

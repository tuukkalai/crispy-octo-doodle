import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class AddButton extends Component {
  handleClick() {
    this.props.onClick();
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={11} />
          <Col xs={1}>
            <Button bsStyle="danger" bsSize="large" onClick={this.handleClick.bind(this)}>
              <FontAwesome name="plus" />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddButton;

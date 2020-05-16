import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Modal, Container, Segment, Header } from "semantic-ui-react";

export default class ModalOverlay extends Component {
  render() {
    return ReactDOM.createPortal(
      <Modal dimmer>
        <Container text>
          <Segment padded="very">
            <Header as="h1">i is modal</Header>
          </Segment>
        </Container>
      </Modal>,
      document.querySelector('#modal')
    );
  }
}

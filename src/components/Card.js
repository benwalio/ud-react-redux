import React, { Component } from "react";
import { Segment, Container, Header } from "semantic-ui-react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }
  componentDidMount() {
    let user = this.props.match.params.user;
    this.setState({
      user,
    });
  }
  render() {
    return (
      <Container text style={{ marginTop:'80px' }}>
        <Segment padded='very'>
          <Header as="h3">card</Header>
          <Header as="h6">{this.state.user}</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolores voluptate rerum quaerat velit ipsa voluptas aut harum,
            tempora ab nisi perferendis quisquam repudiandae, vel beatae, eum
            laborum molestias similique.
          </p>
        </Segment>
      </Container>
    );
  }
}

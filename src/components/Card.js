import React, { Component } from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    const {title,body} = this.props.card;
    return (
      <Container text style={{ marginTop:'80px' }}>
        <Segment padded='very'>
          <Header as="h3">card</Header>
          <Header as="h4">{title}</Header>
          <p>
            {body}
          </p>
        </Segment>
      </Container>
    );
  }
}

const mapStateToCard = (state, ownProps) => {
  let title = ownProps.params.match.user;
  return {
    card: state.cards.find(card => card.title === title)
  }
}

export default connect(mapStateToCard)(Card);